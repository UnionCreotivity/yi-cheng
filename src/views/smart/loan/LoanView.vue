<template>
  <section class="loan">
    <Nav color="white" tag="smart" />
    <div class="loan-container">
      <div class="loan-container-bg"></div>
      <div class="loan-container-top">
        <h1>房貸試算</h1>
        <div class="loan-title-en">
          <img src="../../../assets/img/loan/loan-title-en.svg" alt="" />
        </div>
      </div>
      <div class="loan-container-bottom">
        <div class="loan-input-container">
          <div class="loan-input-item">
            <h4>貸款年限</h4>
            <div class="loan-input">
              <input
                type="number"
                id="cal-year"
                min="0"
                max="99"
                v-model="loanInputModel.year"
                @click.stop="checkClick('cal-year')"
              />
              <p>年</p>
            </div>
          </div>
          <div class="loan-input-item">
            <h4>總金額</h4>
            <div class="loan-input">
              <input
                type="number"
                id="cal-total"
                min="0"
                max="100000"
                v-model="loanInputModel.total"
                @click.stop="checkClick('cal-total')"
              />
              <p>萬元</p>
            </div>
          </div>
          <div class="loan-input-item">
            <h4>年利率</h4>
            <div class="loan-input">
              <input
                type="text"
                id="cal-ratio"
                v-model="loanInputModel.ratio"
                @click.stop="checkClick('cal-ratio')"
              />
              <p>%</p>
            </div>
          </div>
          <div class="loan-select-item">
            <h4>寬限期</h4>
            <div class="loan-select-main">
              <div class="loan-select-first">
                <input
                  type="radio"
                  id="none"
                  value="none"
                  name="period"
                  v-model="loanInputModel.allowance"
                />
                <label for="none">無</label>
              </div>
              <div class="loan-select-second">
                <input
                  type="radio"
                  id="three"
                  value="three"
                  name="period"
                  v-model="loanInputModel.allowance"
                />
                <label for="three">3年</label>
              </div>
            </div>
          </div>
          <div class="loan-click-item">
            <div class="loan-click-clear">
              <button type="button" @click.stop="cleanClick">清除</button>
            </div>
            <div class="loan-click-cal">
              <button type="button" @click.stop="submitClick">試算</button>
            </div>
          </div>
        </div>
        <div class="loan-vertical-line"></div>
        <LoanResult />
        <div class="loan-cal-container">
          <div class="loan-cal-item loan-cal-7" @click.stop="keyboardClick('7')">
            <img src="../../../assets/img/loan/7.svg" alt="" />
          </div>
          <div class="loan-cal-item loan-cal-8" @click.stop="keyboardClick('8')">
            <img src="../../../assets/img/loan/8.svg" alt="" />
          </div>
          <div class="loan-cal-item loan-cal-9" @click.stop="keyboardClick('9')">
            <img src="../../../assets/img/loan/9.svg" alt="" />
          </div>
          <div class="loan-cal-item loan-cal-back" @click.stop="keyboardBackClick()">
            <img src="../../../assets/img/loan/back.svg" alt="" />
          </div>
          <div class="loan-cal-item loan-cal-4" @click.stop="keyboardClick('4')">
            <img src="../../../assets/img/loan/4.svg" alt="" />
          </div>
          <div class="loan-cal-item loan-cal-5" @click.stop="keyboardClick('5')">
            <img src="../../../assets/img/loan/5.svg" alt="" />
          </div>
          <div class="loan-cal-item loan-cal-6" @click.stop="keyboardClick('6')">
            <img src="../../../assets/img/loan/6.svg" alt="" />
          </div>
          <div class="loan-cal-item loan-cal-cancel" @click.stop="cleanClick">
            <img src="../../../assets/img/loan/cancel.svg" alt="" />
          </div>
          <div class="loan-cal-item loan-cal-1" @click.stop="keyboardClick('1')">
            <img src="../../../assets/img/loan/1.svg" alt="" />
          </div>
          <div class="loan-cal-item loan-cal-2" @click.stop="keyboardClick('2')">
            <img src="../../../assets/img/loan/2.svg" alt="" />
          </div>
          <div class="loan-cal-item loan-cal-3" @click.stop="keyboardClick('3')">
            <img src="../../../assets/img/loan/3.svg" alt="" />
          </div>
          <div class="loan-cal-item loan-cal-0" @click.stop="keyboardClick('0')">
            <img src="../../../assets/img/loan/0.svg" alt="" />
          </div>
          <div class="loan-cal-item loan-cal-dot" @click.stop="keyboardClick('.')">
            <img src="../../../assets/img/loan/dot.svg" alt="" />
          </div>
          <div class="loan-cal-item loan-cal-submit" @click.stop="submitClick">
            <img src="../../../assets/img/loan/submit.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLoan } from '@/stores/loanStore'
import Nav from '@/components/nav/Nav.vue'
import LoanResult from '@/components/loan/LoanResult.vue'
import '@/assets/scss/loan/loan.scss'

const loanStore = useLoan()

const loanInputModel = ref({
  year: 0,
  total: 0,
  ratio: '',
  allowance: 'none',
})

const nowInputId = ref('')

const tempRatio = ref('.')

const targetMap: Record<string, 'year' | 'total' | 'ratio'> = {
  'cal-year': 'year',
  'cal-total': 'total',
  'cal-ratio': 'ratio',
}

//年利率因為小數點的關係，所以使用字串處理
const cleanClick = () => {
  loanInputModel.value = {
    year: 0,
    total: 0,
    ratio: '',
    allowance: 'none',
  }
  loanStore.cleanAll()
}

const submitClick = () => {
  loanStore.loanCalc(loanInputModel.value, 'normal')
}

const checkClick = (id: string) => {
  nowInputId.value = id
}

//判斷鍵盤點擊項目，鍵盤輸入為text
const keyboardClick = (num: string) => {
  const key = targetMap[nowInputId.value]
  if (!key) return
  const inputNum = num
  if (key === 'ratio') {
    loanInputModel.value.ratio += inputNum
  } else {
    const modelTemp = loanInputModel.value[key].toString() + inputNum
    const total = Math.floor(Number(modelTemp))
    loanInputModel.value[key] = total
  }
}

//back按鈕功能
const keyboardBackClick = () => {
  const key = targetMap[nowInputId.value]
  if (!key) return
  const temp = loanInputModel.value[key].toString()
  if (temp.length === 0) return

  //ratio的input是text，其餘為number，所以除了ratio以外要轉換成number
  if (key === 'ratio') {
    loanInputModel.value[key] = temp.slice(0, length - 1)
  } else {
    loanInputModel.value[key] = Math.floor(Number(temp.slice(0, length - 1)))
  }
}

//年利率檢查
const testRatio = () => {
  const regex = /^\d*\.?\d{0,2}?$/
  const testRatio = regex.test(loanInputModel.value.ratio)
  if (testRatio) {
    tempRatio.value = loanInputModel.value.ratio
  } else {
    loanInputModel.value.ratio = tempRatio.value
  }
}

watch(
  loanInputModel,
  () => {
    if (Number(loanInputModel.value.year) > 99) {
      loanInputModel.value.year = 99
    }
    if (Number(loanInputModel.value.total) > 100000) {
      loanInputModel.value.total = 100000
    }
    if (Number(loanInputModel.value.ratio) > 10) {
      loanInputModel.value.ratio = '10'
    }
    testRatio()
  },
  { deep: true },
)
</script>

<style scoped></style>
