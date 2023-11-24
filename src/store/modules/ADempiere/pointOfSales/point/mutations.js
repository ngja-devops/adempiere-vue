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
 * Pos Mutations
 * All related to global store of Point of Sales
 */
import { isEmptyValue } from '@/utils/ADempiere'

export default {
  setPointOfSalesList(state, pointOfSalesList) {
    state.pointOfSalesList = pointOfSalesList
  },
  setWarehousesList(state, warehousesList) {
    state.warehousesList = warehousesList
  },
  setDiscountList(state, discountList) {
    state.discountList = discountList
  },
  setCurrentDiscountList(state, currentDiscountList) {
    state.currentDiscountList = currentDiscountList
  },
  setDocumentTypesList(state, documentTypesList) {
    state.documentTypesList = documentTypesList
  },
  setCurrentPriceList(state, currentPriceList) {
    state.currentPriceList = currentPriceList
  },
  setCurrentWarehousePos(state, warehouse) {
    state.currentWarehousePos = warehouse
  },
  setCurrentDocumentTypePos(state, documentType) {
    state.currentDocumentTypePos = documentType
  },
  setPricesList(state, pricesList) {
    state.pricesList = pricesList
  },
  setCurrenciesList(state, currenciesList) {
    state.currenciesList = currenciesList
  },
  setTenderTypesList(state, tenderTypes) {
    state.tenderTypes = tenderTypes
  },
  currentTenderChange(state, tenderChange) {
    state.tenderChange = tenderChange
  },
  addConversionToList(state, conversion) {
    const search = state.conversionsList.find(currency => currency.id === conversion.id && currency.validFrom === conversion.validFrom)
    if (!isEmptyValue(search)) {
      state.conversionsList.map(list => {
        if (list) {
          return {
            ...search
          }
        }
      })
    } else {
      state.conversionsList.push(conversion)
    }
  },
  setCurrentPointOfSales(state, currentPointOfSales) {
    state.currentPointOfSales = currentPointOfSales
  },
  setShowPOSOptions(state, isShowedOptions) {
    state.showPOSOptions = isShowedOptions
  },
  setShowPOSKeyLayout(state, isShowedKeyLayout) {
    state.showPOSKeyLayout = isShowedKeyLayout
  },
  setShowPOSCollection(state, isShowedCollection) {
    state.showPOSCollection = isShowedCollection
  },
  setProcessLoading(state, loading) {
    state.isLoadingProcess = loading
  },
  setShowSummaryCashOpen(state, show) {
    state.isShowSummaryCashOpen = show
  },
  setSummaryCashOpen(state, attribute) {
    state.summaryCashOpen = attribute
  },
  setShowSummaryCashClose(state, show) {
    state.isShowSummaryCashClose = show
  },
  setSummaryCashClose(state, attribute) {
    state.summaryCashClose = attribute
  },
  setLoadingCashOpen(state, loading) {
    state.isLoadingCashOpen = loading
  },
  setLoadingCashWithdrawal(state, loading) {
    state.isLoadingCashWithdrawal = loading
  },
  setLoadingCashClosing(state, loading) {
    state.isLoadingCashClosing = loading
  },
  setShowSummaryReverseOrder(state, show) {
    state.isShowSummaryReverseOrder = show
  },
  setSummaryReverseOrder(state, order) {
    state.summaryReverseOrder = order
  },
  setShowConfirmDelivery(state, show) {
    state.isShowConfirmDelivery = show
  },
  setSummaryConfirmDelivery(state, summary) {
    state.summaryConfirmDelivery = summary
  }
}
