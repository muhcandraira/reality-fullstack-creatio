define("UsrRealityVisitPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "DateTimePicker_parqxpu",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.UsrRealityVisitDS_UsrVisitDateTime_wem4w1k",
					"labelPosition": "above",
					"control": "$UsrRealityVisitDS_UsrVisitDateTime_wem4w1k"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_zxhb21t",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrRealityVisitDS_UsrPotentialCustomer_ek2av0k",
					"labelPosition": "above",
					"control": "$UsrRealityVisitDS_UsrPotentialCustomer_ek2av0k",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_c8cs0ez",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_c8cs0ez_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_zxhb21t",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_6sgcsk1",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrRealityVisitDS_UsrComments_yo3qmli",
					"labelPosition": "above",
					"control": "$UsrRealityVisitDS_UsrComments_yo3qmli"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_esm6m5w",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrRealityVisitDS_UsrManager_jhpbhh6",
					"labelPosition": "above",
					"control": "$UsrRealityVisitDS_UsrManager_jhpbhh6",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_hxetj6d",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_hxetj6d_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_esm6m5w",
				"propertyName": "listActions",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrRealityVisitDS_UsrVisitDateTime_wem4w1k": {
						"modelConfig": {
							"path": "UsrRealityVisitDS.UsrVisitDateTime"
						}
					},
					"UsrRealityVisitDS_UsrPotentialCustomer_ek2av0k": {
						"modelConfig": {
							"path": "UsrRealityVisitDS.UsrPotentialCustomer"
						}
					},
					"UsrRealityVisitDS_UsrComments_yo3qmli": {
						"modelConfig": {
							"path": "UsrRealityVisitDS.UsrComments"
						}
					},
					"UsrRealityVisitDS_UsrManager_jhpbhh6": {
						"modelConfig": {
							"path": "UsrRealityVisitDS.UsrManager"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrRealityVisitDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrRealityVisit"
							}
						}
					},
					"primaryDataSourceName": "UsrRealityVisitDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});