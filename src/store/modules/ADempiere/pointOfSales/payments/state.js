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
 * Payment State
 */
export default {
  paymentBox: [],
  multiplyRate: 1,
  divideRate: 1,
  multiplyRateCollection: 1,
  divideRateCollection: 1,
  listPayments: {
    payments: [],
    isLoaded: false
  },
  currency: [],
  convertion: {},
  fieldCurrency: {},
  convertionRate: [],
  refundLoaded: [],
  deliveryList: [],
  listRefund: [],
  addRefund: {},
  currentFieldCurrencyRedund: {},
  listCashSummary: [],
  listCashSummaryMovements: [],
  isShowCashSummaryMovements: false,
  listCastOpen: [],
  listWithdrawal: [],
  dialogoInvoce: {
    show: false,
    type: 0,
    success: false
  },
  shipment: {},
  currentCustomerBankAccount: {},
  listCustomerBankAccounts: [],
  listRefundReference: []
}
