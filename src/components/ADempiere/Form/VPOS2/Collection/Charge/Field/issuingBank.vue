<!--
ADempiere-Vue (Frontend) for ADempiere ERP & CRM Smart Business Solution
Copyright (C) 2018-Present E.R.P. Consultores y Asociados, C.A.
Contributor(s): Elsio Sanchez elsiosanchez15@outlook.com https://github.com/elsiosanchez
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program. If not, see <https:www.gnu.org/licenses/>.
-->

<template>
  <el-form-item
    :label="$t('pointOfSales.collection.issuingBank')"
    class="form-item-criteria"
    style="margin: 0px;width: 100%;"
  >
    <el-select
      v-model="issuingBank"
      filterable
      clearable
      :disabled="!isEmptyValue(currentAccount)"
      @visible-change="findBanks"
    >
      <el-option
        v-for="item in listBanks"
        :key="item.id"
        :label="item.name"
        :value="item.id"
      />
    </el-select>
  </el-form-item>
</template>

<script>
import { computed, defineComponent } from '@vue/composition-api'

import store from '@/store'
// import { isEmptyValue } from '@/utils/ADempiere'

export default defineComponent({
  name: 'issuingBank',
  props: {
    isRefund: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const currentAccount = computed(() => {
      return store.getters.getAttributeField({
        field: 'bankAccounts',
        attribute: 'currentAccount'
      })
    })

    const listBanks = computed(() => {
      return store.getters.getAttributeField({
        field: 'banks',
        attribute: 'listBanks'
      })
    })

    const issuingBank = computed({
      get() {
        const banck = store.getters.getAttributeField({
          field: 'banks',
          attribute: 'issuingBank'
        })
        if (banck) return banck.id
        return ''
      },
      // setter
      set(bank) {
        let currentBank
        if (bank) {
          currentBank = listBanks.value.find(list => list.id === bank)
        }
        store.commit('setAttributeField', {
          field: 'banks',
          attribute: 'issuingBank',
          value: currentBank
        })
      }
    })

    function findBanks(show) {
      if (!show) return
      store.dispatch('banks')
    }

    return {
      listBanks,
      issuingBank,
      currentAccount,
      findBanks
    }
  }
})
</script>
