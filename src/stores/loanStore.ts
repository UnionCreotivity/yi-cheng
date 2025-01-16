import { defineStore } from 'pinia'

interface CalFormVal {
  year: number
  total: number
  ratio: string
  allowance: string
}

const toMoneyStyle = (num: number) => {
  return num.toLocaleString('zh-TW', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}

//房貸試算
export const useLoan = defineStore('loan', {
  state: () => {
    return {
      deposit: '',
      sign: '',
      construction: '',
      license: '',
      delivery: '',
      ownMoney: '',
      loanMoney: '',
      monthlyCost: '',
      interestRepayment: '',
      allowancePeriodCost: '',
      afterAllowancePeriodCost: '',
      salesMan: '',
      allAllowance: '',
    }
  },
  actions: {
    loanCalc(val: CalFormVal) {
      //月利率
      const monthRatio = Number(val.ratio) / 12 / 100
      let loanMonth = 0
      let periodMoney = 0
      let avgMonthRatio = 0
      let totalMoney = 0
      this.deposit = '10'
      //有寬限期
      if (val.allowance === 'three') {
        //-- 月數= (貸款年限*12)-(寬限年*12) --
        loanMonth = val.year * 12 - 3 * 12
        //-- 每月應付本息金額之平均攤還率 --
        avgMonthRatio =
          (Math.pow(1 + monthRatio, loanMonth) * monthRatio) /
          (Math.pow(1 + monthRatio, loanMonth) - 1)
        periodMoney = val.total * 0.8 * monthRatio * 10000
      } else {
        //無寬限期
        //-- 月數= 貸款年限*12 --
        loanMonth = val.year * 12
        //-- 每月應付本息金額之平均攤還率 --
        avgMonthRatio =
          (Math.pow(1 + monthRatio, loanMonth) * monthRatio) /
          (Math.pow(1 + monthRatio, loanMonth) - 1)

        totalMoney = Math.floor(val.total * 0.8 * avgMonthRatio * 10000 * loanMonth)
      }
      //---------------- 拆款 ----------------

      //簽約金
      this.sign = toMoneyStyle(Math.ceil(val.total * 0.08 - 10))
      //1樓底板
      // this.firstFloor = toMoneyStyle(Math.ceil(val.total * 0.01))
      //8樓底板
      // this.eighthFloor = toMoneyStyle(Math.ceil(val.total * 0.01))
      //16樓底板
      // this.sixteenThFloor = toMoneyStyle(Math.ceil(val.total * 0.01))
      //結構完成
      this.construction = toMoneyStyle(Math.ceil(val.total * 0.03))
      //交屋款
      this.delivery = toMoneyStyle(Math.ceil(val.total * 0.05))

      //---------------- 拆款 END ----------------
      //自備款
      this.ownMoney = toMoneyStyle(Math.ceil(val.total * 0.2))
      //貸款
      this.loanMoney = toMoneyStyle(Math.floor(val.total * 0.8))

      //使照申請 自備款減去拆款後的值當作使照申請
      this.license = toMoneyStyle(
        Number(this.ownMoney) -
          Number(this.deposit) -
          Number(this.sign) -
          Number(this.construction) -
          Number(this.delivery),
      )
      //本利攤還
      this.monthlyCost = toMoneyStyle(Math.floor(val.total * 0.8 * avgMonthRatio * 10000))
      //還息金額
      this.interestRepayment = toMoneyStyle((totalMoney - val.total * 0.8 * 10000) / loanMonth)
      //寬限期
      this.allowancePeriodCost = toMoneyStyle(Math.floor(periodMoney))
      // this.allowancePeriodCost = toMoneyStyle(3)
      //寬限期之後
      this.afterAllowancePeriodCost = toMoneyStyle(
        Math.floor(val.total * 0.8 * avgMonthRatio * 10000),
      )
    },
    cleanAll() {
      this.deposit = ''
      this.sign = ''
      this.construction = ''
      this.license = ''
      this.delivery = ''
      this.ownMoney = ''
      this.loanMoney = ''
      this.monthlyCost = ''
      this.interestRepayment = ''
      this.allowancePeriodCost = ''
      this.afterAllowancePeriodCost = ''
      this.salesMan = ''
      this.allAllowance = ''
    },
  },
})
