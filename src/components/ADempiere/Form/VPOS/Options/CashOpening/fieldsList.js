// ADempiere-Vue (Frontend) for ADempiere ERP & CRM Smart Business Solution
// Copyright (C) 2017-Present E.R.P. Consultores y Asociados, C.A.
// Contributor(s): Yamel Senih ysenih@erpya.com www.erpya.com
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

const tableName = 'C_Payment'

export default [
  // Amont
  {
    tableName,
    elementColumnName: 'PayAmt',
    columnName: 'PayAmt',
    isFromDictionary: true,
    overwriteDefinition: {
      sequence: 0,
      handleContentSelection: true,
      handleActionPerformed: true,
      size: 24,
      isNumericField: true,
      isActiveLogics: true,
      isMandatory: true
    }
  },
  // CollectAgent
  {
    elementColumnName: 'CollectingAgent_ID',
    isFromDictionary: true,
    overwriteDefinition: {
      sequence: 2,
      handleActionKeyPerformed: true,
      handleActionPerformed: true,
      handleContentSelection: true,
      isMandatory: false,
      size: 24
    }
  },
  {
    elementColumnName: 'Description',
    isFromDictionary: true,
    overwriteDefinition: {
      sequence: 2,
      handleActionKeyPerformed: true,
      handleActionPerformed: true,
      handleContentSelection: true,
      size: 24
    }
  },
  {
    fieldUuid: '8db541f0-fb40-11e8-a479-7a0060f0aa01',
    uuid: '8db541f0-fb40-11e8-a479-7a0060f0aa01',
    isFromDictionary: true,
    overwriteDefinition: {
      isCustomField: true,
      isMandatory: false,
      handleActionKeyPerformed: true,
      handleActionPerformed: true,
      handleContentSelection: true,
      size: 24
    }
  }
]
