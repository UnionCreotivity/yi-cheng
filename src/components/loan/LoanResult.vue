<template>
  <div class="loan-result-container">
    <ul class="loan-result-col">
      <li class="loan-result-li">
        <h4>訂金:</h4>
        <div class="loan-result-number">
          <p>{{ deposit }}</p>
        </div>
        <div class="loan-result-text">萬元</div>
      </li>
      <li class="loan-result-li">
        <h4>簽約金:</h4>
        <div class="loan-result-number">
          <p>{{ sign }}</p>
        </div>
        <div class="loan-result-text">萬元</div>
      </li>
      <li class="loan-result-li">
        <h4>結構款:</h4>
        <div class="loan-result-number">
          <p>{{ construction }}</p>
        </div>
        <div class="loan-result-text">萬元</div>
      </li>
      <li class="loan-result-li">
        <h4>使照取得:</h4>
        <div class="loan-result-number">
          <p>{{ license }}</p>
        </div>
        <div class="loan-result-text">萬元</div>
      </li>
      <li class="loan-result-li">
        <h4>交屋款:</h4>
        <div class="loan-result-number">
          <p>{{ delivery }}</p>
        </div>
        <div class="loan-result-text">萬元</div>
      </li>
    </ul>
    <ul class="loan-result-col loan-result-col-second">
      <li class="loan-result-li">
        <h4>自備金額:</h4>
        <div class="loan-result-number">
          <p>{{ ownMoney }}</p>
        </div>
        <div class="loan-result-text">萬元</div>
      </li>
      <li class="loan-result-li" v-if="is_Allowance">
        <h4>前三年寬限期:</h4>
        <div class="loan-result-number">
          <p>{{ allowancePeriodCost }}</p>
        </div>
        <div class="loan-result-text">元/月</div>
      </li>
      <li class="loan-result-li">
        <h4>本息均攤:</h4>
        <div class="loan-result-number">
          <p>{{ all }}</p>
        </div>
        <div class="loan-result-text">元/月</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useLoan } from '@/stores/loanStore'
import '@/assets/scss/loan/loan-result.scss'

const loanStore = useLoan()

const is_Allowance = ref(false)

const {
  deposit,
  sign,
  construction,
  license,
  delivery,
  ownMoney,
  monthlyCost,
  allowancePeriodCost,
  afterAllowancePeriodCost,
} = storeToRefs(loanStore)

watch(allowancePeriodCost, () => {
  // console.log(typeof allowancePeriodCost.value)
  if (Number(allowancePeriodCost.value.replace(',', '')) > 0) {
    is_Allowance.value = true
  } else {
    is_Allowance.value = false
  }
})

const all = computed(() => {
  return is_Allowance.value
    ? afterAllowancePeriodCost.value
    : Number(monthlyCost.value.replace(',', ''))
})

onMounted(() => {
  loanStore.cleanAll()
})
</script>

<style scoped></style>
