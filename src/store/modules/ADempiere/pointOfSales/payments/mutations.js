// ADempiere-Vue (Frontend) for ADempiere ERP & CRM Smart Business Solution
// Copyright (C) 2017-Present E.R.P. Consultores y Asociados, C.A.
// Contributor(s): Elsio Sanchez esanchez@erpya.com www.erpya.com
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

/**
 * Payments Mutations
 */
export default {
  addPaymentBox(state, paymentBox) {
    state.paymentBox.push(paymentBox)
  },
  currencyMultiplyRate(state, multiplyRate) {
    state.multiplyRate = multiplyRate
  },
  currencyDivideRate(state, divideRate) {
    state.divideRate = divideRate
  },
  currencyMultiplyRateCollection(state, multiplyRateCollection) {
    state.multiplyRateCollection = multiplyRateCollection
  },
  currencyDivideRateCollection(state, divideRateCollection) {
    state.divideRateCollection = divideRateCollection
  },
  setListPayments(state, list) {
    state.listPayments = list
  },
  listRefund(state, list) {
    state.listRefund = list
  },
  setAddRefund(state, refund) {
    state.addRefund = refund
  },
  setCurrencyDisplaye(state, currency) {
    state.currency = currency
  },
  setConvertionPayment(state, convertion) {
    state.convertion = convertion
  },
  conversionRate(state, currency) {
    const listCurrent = state.convertionRate.find(element => {
      if (element.id === currency.id) {
        return element
      }
    })
    if (listCurrent === undefined) {
      state.convertionRate.push(currency)
    }
  },
  resetConversionRate(state, currency) {
    state.convertionRate = currency
  },
  setFieldCurrency(state, currency) {
    state.fieldCurrency = currency
  },
  dialogoInvoce(state, { show, type, success }) {
    state.dialogoInvoce = {
      show,
      type,
      success
    }
  },
  setRefundLoaded(state, refund) {
    state.refundLoaded = refund
  },
  setCurrencyRedund(state, currency) {
    state.currentFieldCurrencyRedund = currency
  },
  setDeliveryList(state, delivery) {
    state.deliveryList = delivery
  },
  setShipment(state, shipment) {
    state.shipment = shipment
  },
  setListCashSummary(state, list) {
    state.listCashSummary = list
  },
  setListCashSummaryMovements(state, list) {
    state.listCashSummaryMovements = list
  },
  setIsShowCashSummaryMovements(state, show) {
    state.isShowCashSummaryMovements = show
  },
  setListCastOpen(state, shipment) {
    state.listCastOpen = shipment
  },
  setListWithdrawal(state, list) {
    state.listWithdrawal = list
  },
  setCurrentCustomerBankAccount(state, bankAccount) {
    state.currentCustomerBankAccount = bankAccount
  },
  setListCustomerBankAccounts(state, list) {
    state.listCustomerBankAccounts = list
  },
  setListRefundReference(state, list) {
    state.listRefundReference = list
  }
}
