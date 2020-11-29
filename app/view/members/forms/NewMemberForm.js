Ext.define('Xe.view.members.forms.NewMemberForm', {
    extend: 'Ext.panel.Panel',

    // Uncomment to give this component an xtype 
    xtype: 'new-memberform',
    layout: 'column',
    width: 600,
    floating: true,
    closable: true,
    autoScroll: true,
    maximized: true,
    requires: [
        'Xe.util.Util',
        'Xe.store.IDTypes',
        'Xe.store.MaritalStatus',
        'Xe.store.Salutation',
        'Xe.store.YesNo',
        'Xe.store.Gender',
    ],

    items: [
        /*  include child components here */
        {
            // title: 'First Component width 30%',
            columnWidth: 0.33,
            layout: 'form',
            items: [{
                    xtype: 'fieldset',
                    title: 'Personal Information',
                    autoHeight: true,
                    collapsed: false,
                    anchor: '98%',
                    items: [{
                            xtype: 'combo',
                            name: 'member.title',
                            hiddenName: 'member.title',
                            fieldLabel: 'Title',
                            allowBlank: false,
                            blankText: 'Please Select Title..',
                            forceSelection: true,
                            triggerAction: 'all',
                            mode: 'local',
                            afterLabelTextTpl: Xe.util.Util.required,
                            emptyText: 'Select Title...',
                            store: {
                                type: 'salutations'
                            },
                            displayField: 'title',
                            valueField: 'id',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Surname',
                            allowBlank: false,
                            afterLabelTextTpl: Xe.util.Util.required, // #1
                            maxLength: 50,
                            name: 'member.surname',
                            anchor: '100%'
                        }, {
                            xtype: 'textfield',
                            fieldLabel: 'Firstname',
                            afterLabelTextTpl: Xe.util.Util.required,
                            allowBlank: false,
                            maxLength: 50,
                            name: 'member.firstname',
                            anchor: '100%'
                        }, {
                            xtype: 'textfield',
                            maxLength: 50,
                            fieldLabel: 'Othernames',
                            allowBlank: true,
                            name: 'member.othernames',
                            anchor: '100%'
                        }, {
                            xtype: 'combo',
                            name: 'member.gender',
                            hiddenName: 'member.gender',
                            fieldLabel: 'Gender',
                            allowBlank: false,
                            blankText: 'Select Gender..',
                            forceSelection: true,
                            triggerAction: 'all',
                            mode: 'local',
                            afterLabelTextTpl: Xe.util.Util.required,
                            emptyText: 'Select Gender...',
                            store: {
                                type: 'genders'
                            },
                            displayField: 'value',
                            valueField: 'id',
                            anchor: '100%'
                        },
                        {
                            xtype: 'combo',
                            name: 'member.maritalStatus',
                            hiddenName: 'member.maritalStatus',
                            fieldLabel: 'Marital Status',
                            allowBlank: false,
                            blankText: 'Select Marital Status..',
                            forceSelection: true,
                            triggerAction: 'all',
                            mode: 'local',
                            emptyText: 'Select Marital Status..',
                            store: {
                                type: 'maritalstatuses'
                            },
                            displayField: 'status',
                            valueField: 'id',
                            anchor: '100%'
                        }, , {
                            xtype: 'datefield',
                            fieldLabel: 'Date Of Birth',
                            name: 'member.dob',
                            allowBlank: false,
                            maxValue: new Date(),
                            // maxValue: schemeConfigs.minDob,
                            id: 'dateofbirth',
                            vtype: 'daterange',
                            endDateField: 'dateofappment',
                            minValue: '1900-01-01',
                            anchor: '100%'
                        },
                        {
                            xtype: 'combo',
                            name: 'member.idType',
                            hiddenName: 'member.idType',
                            fieldLabel: 'ID Type',
                            // allowBlank: schemeConfigs.allowBlankIDType,
                            forceSelection: true,
                            triggerAction: 'all',
                            mode: 'local',
                            // emptyText: schemeConfigs.allowBlankIDType == true ? '' : 'Select ID Type...',
                            store: {
                                type: 'idTypes'
                            },
                            displayField: 'type',
                            valueField: 'id',
                            anchor: '100%',
                            listeners: {
                                select: function(c, rec, idx) {
                                    // var f = Ext.getCmp("memberFormPanel").getForm();
                                    // var mId = f.findField('member.id').getValue();
                                    // var pass = Ext.getCmp('passport');
                                    // var idno = Ext.getCmp('idnumber');
                                    // var otheridno = Ext.getCmp('otherId');

                                    // var idType = this.getValue();

                                    // if (idType == 'PASSPORT') {
                                    //     idno.hide();
                                    //     otheridno.hide();
                                    //     pass.show();
                                    //     idno.disable();
                                    //     otheridno.disable();
                                    //     pass.enable();
                                    // } else if (idType == 'NATIONAL') {
                                    //     // idno.show();
                                    //     // otheridno.hide();
                                    //     // pass.hide();
                                    //     // idno.enable();
                                    //     // otheridno.disable();
                                    //     // pass.disable();
                                    // } else {
                                    //     // idno.hide();
                                    //     otheridno.show();
                                    //     pass.hide();
                                    //     idno.disable();
                                    //     otheridno.enable();
                                    //     pass.disable();
                                    // }

                                }
                            }
                        }, {
                            xtype: 'textfield',
                            fieldLabel: 'ID Number',
                            // allowBlank: schemeConfigs.allowBlankIDType,
                            name: 'member.idNo',
                            id: 'otherId',
                            maxLength: 15,
                            msgTarget: 'under',
                            regex: /^[a-zA-Z0-9\-\/\\]+$/,
                            blankText: 'ID Number Cannot be Null!',
                            anchor: '100%',
                            listeners: {
                                change: function(fld, n, o) {

                                    // var f = Ext.getCmp("memberFormPanel").getForm();
                                    // var idType = f.findField('member.idType').getValue();

                                    // if (idType == '' || n == '')
                                    //     return;

                                    // loadMemberBio(f, idType, n);

                                }
                            }
                        }, {
                            xtype: 'textfield',
                            fieldLabel: 'ID Number',
                            hidden: true,
                            disabled: true,
                            // allowBlank: schemeConfigs.allowBlankIDType,
                            name: 'member.idNo',
                            id: 'idnumber',
                            maxLength: 15,
                            msgTarget: 'under',
                            vtype: 'IdNumberVType',
                            blankText: 'ID Number Cannot be Null!',
                            anchor: '100%',
                            listeners: {
                                change: function(fld, n, o) {

                                    // var f = Ext.getCmp("memberFormPanel").getForm();
                                    // var idType = f.findField('member.idType').getValue();

                                    // if (idType == '' || n == '')
                                    //     return;

                                    // loadMemberBio(f, idType, n);

                                }
                            }

                        }, {
                            xtype: 'textfield',
                            fieldLabel: 'Passport Number',
                            hidden: true,
                            disabled: true,
                            // allowBlank: schemeConfigs.allowBlankIDType,
                            name: 'member.idNo',
                            id: 'passport',
                            maxLength: 15,
                            msgTarget: 'under',
                            vtype: 'PassportNumberVType',
                            blankText: 'ID Number Cannot be Null!',
                            anchor: '100%',
                            listeners: {
                                change: function(fld, n, o) {

                                    // var f = Ext.getCmp("memberFormPanel").getForm();
                                    // var idType = f.findField('member.idType').getValue();

                                    // if (idType == '' || n == '')
                                    //     return;

                                    // loadMemberBio(f, idType, n);

                                }
                            }

                        }, {
                            xtype: 'textfield',
                            fieldLabel: 'Tax ID Number',
                            name: 'member.pinNo',
                            anchor: '100%',
                            // minLength: (schemeConfigs.validatePin ? 10 : 1),
                            // maxLength: (schemeConfigs.validatePin ? 11 : 100),
                            // vtype: (schemeConfigs.validatePin ? 'PinNumberVType' : 'AnyThingVType'),
                            listeners: {
                                change: function(fld, n, o) {

                                    // var f = Ext.getCmp("memberFormPanel").getForm();
                                    // var idType = f.findField('member.idType').getValue();

                                    // if (idType == '' || n == '')
                                    //     return;

                                    // loadMemberBio(f, idType, n);

                                }
                            }
                        }, {
                            xtype: 'textfield',
                            fieldLabel: 'N.H.I.F',
                            allowBlank: true,
                            name: 'member.nhif',
                            maxLength: 50,
                            anchor: '100%'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'Address Information',
                    autoHeight: true,
                    collapsed: false,
                    anchor: '98%',
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: 'Phone No.(Primary)',
                        name: 'member.memberBio.address.cellPhone',
                        renderer: function(value) {
                            return value.replace(/^(\d{3})(\d{3})(\d{4})$/, '$1-$2-$3');
                        },
                        // vtype: (schemeConfigs.validatePhone ? 'PhoneNumberVType' : 'AnyThingVType'),
                        anchor: '100%'
                    }, {
                        xtype: 'textfield',
                        fieldLabel: 'Secondary Phone No.',
                        name: 'member.memberBio.address.secondaryPhone',
                        renderer: function(value) {
                            return value.replace(/^(\d{3})(\d{3})(\d{4})$/, '$1-$2-$3');
                        },
                        // vtype: (schemeConfigs.validatePhone ? 'PhoneNumberVType' : 'AnyThingVType'),
                        anchor: '100%'
                    }, {
                        xtype: 'textfield',
                        fieldLabel: 'Address',
                        // allowBlank: !(prefs.makeAddressCompulsory),
                        name: 'member.memberBio.address.postalAddress',
                        blankText: 'Address Cannot be empty!',
                        maxLength: 50,
                        anchor: '100%'
                    }, {
                        xtype: 'textfield',
                        fieldLabel: 'Building',
                        name: 'member.memberBio.address.building',
                        maxLength: 50,
                        anchor: '100%'
                    }, {
                        xtype: 'textfield',
                        fieldLabel: 'Road',
                        name: 'member.memberBio.address.road',
                        maxLength: 50,
                        anchor: '100%'
                    }, {
                        xtype: 'textfield',
                        fieldLabel: 'Town',
                        name: 'member.memberBio.address.town',
                        maxLength: 50,
                        anchor: '100%'
                    }, {
                        xtype: 'textfield',
                        fieldLabel: 'Country',
                        // allowBlank: !(prefs.makeAddressCompulsory),
                        name: 'member.memberBio.address.country',
                        maxLength: 50,
                        anchor: '100%'
                    }, {
                        xtype: 'textfield',
                        fieldLabel: 'Telephone',
                        // allowBlank: !(prefs.makeAddressCompulsory),
                        name: 'member.memberBio.address.fixedPhone',
                        // vtype: (schemeConfigs.validatePhone ? 'PhoneNumberVType' : 'AnyThingVType'),
                        maxLength: 15,
                        anchor: '100%'
                    }, {
                        xtype: 'textfield',
                        fieldLabel: 'Email',
                        name: 'member.memberBio.address.email',
                        // allowBlank: !(prefs.makeAddressCompulsory),
                        vtype: 'email',
                        anchor: '100%'
                    }, {
                        xtype: 'textfield',
                        fieldLabel: 'Residential Address',
                        // allowBlank: !(prefs.makeAddressCompulsory),
                        name: 'member.memberBio.address.residentialAddress',
                        blankText: 'Address Cannot be empty!',
                        maxLength: 50,
                        anchor: '100%'
                    }]
                }
            ],

        }, {
            // title: 'Second Component width 40%',

            columnWidth: 0.33,
            layout: 'form',
            items: [{
                xtype: 'fieldset',
                title: 'Employment Information',
                autoHeight: true,
                collapsed: false,
                anchor: '98%',
                items: [{
                        xtype: 'radiogroup',
                        fieldLabel: 'Employed?',
                        columns: 2,
                        items: [{
                            boxLabel: 'YES',
                            name: 'member.employed',
                            inputValue: 'YES',
                            checked: true
                        }, {
                            boxLabel: 'NO',
                            name: 'member.employed',
                            inputValue: 'NO'
                        }],
                        anchor: '100%'
                    }, {
                        xtype: 'textfield',
                        fieldLabel: 'Staff Number',
                        name: 'member.staffNo',
                        maxLength: 50,
                        anchor: '100%'
                    }, {
                        xtype: 'textfield',
                        fieldLabel: 'Social Security Number',
                        name: 'member.nationalPenNo',
                        maxLength: 50,
                        anchor: '100%'
                    }, {
                        xtype: 'textfield',
                        fieldLabel: 'Designation',
                        maxLength: 50,
                        name: 'member.designation',
                        anchor: '100%'
                    }, {
                        xtype: 'textfield',
                        fieldLabel: 'Department',
                        name: 'member.department',
                        maxLength: 50,
                        anchor: '100%'
                    },
                    /* {
                                       xtype: 'combo',
                                       name: 'member.jobGradeId',
                                       hiddenName: 'member.jobGradeId',
                                       fieldLabel: 'Job Grade',
                                       blankText: 'Select Grade...',
                                       forceSelection: true,
                                       triggerAction: 'all',
                                       mode: 'local',
                                       store: jobGradesStore,
                                       displayField: 'name',
                                       valueField: 'id',
                                       anchor: '100%'
                                   }, */
                    {
                        xtype: 'datefield',
                        fieldLabel: 'Date Of Appointment',
                        maxValue: new Date(),
                        allowBlank: false,
                        minValue: '1950-01-01',
                        id: 'dateofappment',
                        name: 'member.dateOfEmployment',
                        vtype: 'daterange',
                        startDateField: 'dateofbirth',
                        anchor: '100%'
                    }, {
                        xtype: 'numberfield',
                        fieldLabel: 'Current Salary',
                        value: 0,
                        minValue: 0,
                        name: 'member.salary',
                        anchor: '100%'
                    }, {
                        xtype: 'datefield',
                        fieldLabel: 'Contract End Date',
                        allowBlank: true,
                        id: 'contractEndDate',
                        name: 'member.contractEndDate',
                        anchor: '100%'
                    }, {
                        xtype: 'textfield',
                        hidden: true,
                        name: 'customFieldSet',
                        id: 'customFieldSet',
                        anchor: '100%'
                    }
                ]
            }, {
                xtype: 'fieldset',
                title: 'Membership Information',
                autoHeight: true,
                collapsed: false,
                anchor: '98%',
                items: [{
                        xtype: 'numberfield',
                        fieldLabel: 'Membership Number',
                        name: 'member.memberNo',
                        // hidden: (schemeConfigs.allowProdMembershipNo),
                        anchor: '100%',
                        readOnly: false,
                        listeners: {
                            blur: function(f) {
                                checkIfMemberExists(f);
                            }
                        }
                    }, {
                        xtype: 'textfield',
                        fieldLabel: 'Membership ID',
                        name: 'member.membershipNo',
                        // hidden: !(schemeConfigs.allowProdMembershipNo),
                        maxLength: 50,
                        readOnly: true,
                        anchor: '100%'
                    }, {
                        xtype: 'textfield',
                        fieldLabel: 'Party Ref No.',
                        name: 'member.partyRefNo',
                        // hidden: !(schemeConfigs.showPartyRefNo),
                        maxLength: 50,
                        readOnly: true,
                        anchor: '100%'
                    }, {
                        xtype: 'datefield',
                        fieldLabel: 'Date Of Joining Scheme',
                        allowBlank: false,
                        // minValue: schemeConfigs.minDoj,
                        maxValue: new Date(),
                        name: 'member.dateJoinedScheme',
                        anchor: '100%'
                    },
                    /*{
                                           xtype: 'combo',
                                           name: 'member.companyId',
                                           hiddenName: 'member.companyId',
                                           fieldLabel: 'Cost Center',
                                           allowBlank: false,
                                           blankText: 'Select Cost Center..',
                                           forceSelection: true,
                                           triggerAction: 'all',
                                           mode: 'local',
                                           emptyText: 'Select Rep...',
                                           store: companies,
                                           displayField: 'name',
                                           valueField: 'id',
                                           anchor: '100%'
                                       },  {
                                           xtype: 'combo',
                                           name: 'member.mclassId',
                                           hiddenName: 'member.mclassId',
                                           fieldLabel: 'Member Class',
                                           allowBlank: false,
                                           blankText: 'Select Class...',
                                           forceSelection: true,
                                           triggerAction: 'all',
                                           mode: 'local',
                                           store: memberClasses,
                                           displayField: 'name',
                                           valueField: 'id',
                                           anchor: '100%',
                                           listeners: {
                                               select: function(c, rec, idx) {
                                                   var f = c.findParentByType('form').getForm();
                                                   var dateOfBirth = f.findField('member.dob').getValue();
                                                   var id = f.findField('member.id').getValue();

                                                   if (dateOfBirth) {
                                                       validateMemberAge(dateOfBirth, rec.get('id'), id);
                                                   } else {
                                                       showErrorMessage("Provide Date of Birth first!");
                                                       f.findField('member.mclassId').setValue("");
                                                   }

                                               }
                                           }
                                       }, */
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Account Number',
                        id: 'policyNoField',
                        name: 'member.policyNo',
                        maxLength: 50,
                        readOnly: true,
                        anchor: '100%'
                    }, {
                        xtype: 'radiogroup',
                        fieldLabel: 'Cover Terminated?',
                        // hidden: (user.user.planType != 'INDIVIDUAL_PENSION_FUND'),
                        // enabled: (user.user.planType == 'INDIVIDUAL_PENSION_FUND'),
                        // allowBlank: !(user.user.planType == 'INDIVIDUAL_PENSION_FUND'),
                        readOnly: true,
                        columns: 2,
                        items: [{
                            boxLabel: 'YES',
                            name: 'member.terminateCover',
                            inputValue: 'YES',
                            checked: true
                        }, {
                            boxLabel: 'NO',
                            name: 'member.terminateCover',
                            inputValue: 'NO'
                        }],
                        anchor: '100%'
                    },
                    /*{
                                           xtype: 'combo',
                                           hidden: !(schemeConfigs.allowInvestmentProfiles),
                                           name: 'member.profileId',
                                           hiddenName: 'member.profileId',
                                           fieldLabel: 'Investment Option',
                                           forceSelection: true,
                                           triggerAction: 'all',
                                           mode: 'local',
                                           store: investOptions,
                                           triggerAction: 'all',
                                           displayField: 'name',
                                           valueField: 'id',
                                           anchor: '100%'
                                       },
                                         {
                                           xtype: 'combo',
                                            hidden: (!schemeConfigs.enableSavingsAndRetirement),
                                           allowBlank: (!schemeConfigs.enableSavingsAndRetirement),
                                           name: 'member.categoryId',
                                           hiddenName: 'member.categoryId',
                                           fieldLabel: 'Savings Category',
                                           forceSelection: true,
                                           mode: 'local',
                                           store: loadSavingsCategoriesStore,
                                           triggerAction: 'all',
                                           displayField: 'name',
                                           valueField: 'id',
                                           anchor: '100%',
                                           listeners: {
                                               select: function(c, rec, idx) {
                                                   var f = c.findParentByType('form').getForm();
                                                   var minValue = rec.get('minimumAllowedPeriod');
                                                   f.findField('member.savingsYears').setMinValue(minValue);
                                                   //validate age
                                                   var dateOfBirth = f.findField('member.dob').getValue();
                                                   var memberClassId = f.findField('member.mclassId').getValue();

                                                   if (dateOfBirth && memberClassId) {
                                                       validateCategoryChoice(dateOfBirth, rec.get('id'), memberClassId);
                                                   } else {
                                                       showErrorMessage("Provide Date of Birth and Member Class first!");
                                                   }

                                               }
                                           }
                                       }, */
                    {
                        xtype: 'numberfield',
                        //hidden: !(user.user.planType == 'SAVINGS_AND_RETIREMENT'),
                        // hidden:(!schemeConfigs.enableSavingsAndRetirement),
                        hidden: true,
                        allowBlank: true,
                        fieldLabel: 'Savings Period(Months)',
                        value: 0,
                        minValue: 0,
                        name: 'member.savingsYears',
                        anchor: '100%'
                    }, {
                        xtype: 'datefield',
                        fieldLabel: 'Date of Subscription',
                        //hidden: !(user.user.planType == 'SAVINGS_AND_RETIREMENT'),
                        // hidden: (!schemeConfigs.enableSavingsAndRetirement),
                        // allowBlank: !(user.user.planType == 'SAVINGS_AND_RETIREMENT'),
                        // allowBlank: (!schemeConfigs.enableSavingsAndRetirement),
                        name: 'member.dateSubscribedToSavingsPlan',
                        maxValue: new Date(),
                        id: 'dateofsubscription',
                        minValue: '1900-01-01',
                        anchor: '100%'
                    }, {
                        xtype: 'textfield',
                        fieldLabel: 'Region',
                        maxLength: 50,
                        name: 'member.memberBio.address.region',
                        anchor: '100%'
                    }, {
                        xtype: 'textfield',
                        fieldLabel: 'County',
                        maxLength: 50,
                        name: 'member.memberBio.address.subRegion',
                        anchor: '100%'
                    }, {
                        xtype: 'textfield',
                        fieldLabel: 'Depot',
                        maxLength: 50,
                        name: 'member.memberBio.address.depot',
                        anchor: '100%'
                    },
                    /* {
                                           xtype: 'combo',
                                           id: 'agentsearchbox',
                                           name: 'member.agentId',
                                           fieldLabel: 'Agent',
                                           hiddenName: 'member.agentId',
                                           hideTriger: true,
                                           emptyText: 'Type to search agent...',
                                           store: agentsList,
                                           blankText: 'Please Select..',
                                           loadingText: 'Searching Agent, Please wait...',
                                           displayField: 'name',
                                           typeAhead: false,
                                           forceSelection: true,
                                           tpl: resultTpl,
                                           width: 200,
                                           pageSize: 10,
                                           itemSelector: 'div.search-item',
                                           onSelect: function(record) {
                                               this.collapse();
                                               this.setValue(record.data.id);
                                           },
                                           triggerAction: 'all',
                                           valueField: 'id',
                                           anchor: '100%'
                                       }, */
                    {
                        xtype: 'combo',
                        fieldLabel: 'Is Transfer in ?',
                        name: 'member.transferIn',
                        hiddenName: 'member.transferIn',
                        blankText: 'Please Select..',
                        forceSelection: true,
                        mode: 'local',
                        emptyText: 'Transfer in?',
                        store: {
                            type: 'yesno'
                        },
                        triggerAction: 'all',
                        displayField: 'name',
                        valueField: 'id',
                        anchor: '100%'
                    }
                    /* , {
                                            xtype: 'combo',
                                            fieldLabel: 'Member Profile',
                                            id: 'member.lifestyleProfile.id',
                                            name: 'member.lifestyleProfile.id',
                                            hiddenName: 'member.lifestyleProfile.id',
                                            // hidden: !(schemeConfigs.allowLifestyleProfiles),
                                            // allowBlank: !(schemeConfigs.allowLifestyleProfiles),
                                            forceSelection: true,
                                            mode: 'local',
                                            emptyText: 'Members profile',
                                            store: LifestyleProfileStore,
                                            triggerAction: 'all',
                                            displayField: 'name',
                                            valueField: 'id',
                                            anchor: '100%'
                                        } */
                    , {
                        xtype: 'radiogroup',
                        fieldLabel: 'Dates Confirmed?',
                        columns: 2,
                        items: [{
                            boxLabel: 'YES',
                            name: 'member.datesConfirmed',
                            inputValue: 'YES'
                        }, {
                            boxLabel: 'NO',
                            name: 'member.datesConfirmed',
                            inputValue: 'NO',
                            checked: true
                        }],
                        anchor: '100%'
                    },
                    {
                        xtype: 'radiogroup',
                        fieldLabel: 'Member Disabled?',
                        // hidden: clientSetup == 'LAPFUND' ? false : true,
                        columns: 2,
                        items: [{
                            boxLabel: 'YES',
                            name: 'member.disabled',
                            inputValue: 'YES'
                        }, {
                            boxLabel: 'NO',
                            name: 'member.disabled',
                            inputValue: 'NO',
                            checked: true
                        }],
                        anchor: '100%'
                    }, {
                        xtype: 'textfield',
                        hidden: true,
                        labelSeparator: '',
                        name: 'member.id',
                        id: 'memberId',
                        anchor: '100%'
                    }, {
                        xtype: 'textfield',
                        hidden: true,
                        labelSeparator: '',
                        name: 'member.approved',
                        anchor: '100%'
                    }, {
                        xtype: 'textfield',
                        hidden: true,
                        labelSeparator: '',
                        name: 'member.partnerNumber',
                        anchor: '100%'
                    }, {
                        xtype: 'textfield',
                        hidden: true,
                        labelSeparator: '',
                        name: 'member.memberBioId',
                        anchor: '100%'
                    }, {
                        xtype: 'textfield',
                        hidden: true,
                        labelSeparator: '',
                        name: 'member.memberBio.id',
                        anchor: '100%'
                    }, {
                        xtype: 'textfield',
                        hidden: true,
                        labelSeparator: '',
                        name: 'member.mbshipStatus',
                        anchor: '100%'
                    },
                    {
                        xtype: 'textfield',
                        hidden: true,
                        labelSeparator: '',
                        name: 'member.memberBio.memberPhoto.url',
                        anchor: '100%',
                        id: 'imageUrl'
                    }
                ]
            }]
        }, {
            columnWidth: 0.33,
            layout: 'form',
            items: [{
                    xtype: 'fieldset',
                    title: 'Notification Information',
                    autoHeight: true,
                    collapsed: false,
                    items: [{
                        xtype: 'radiogroup',
                        fieldLabel: 'Receive notifications?',
                        columns: 3,
                        items: [{
                            boxLabel: 'Yes',
                            name: 'member.allowNotifications',
                            inputValue: 'YES',
                            listeners: {
                                check: function(checkbox, checked) {
                                    if (checked) {
                                        Ext.getCmp('notPlatform').enable();
                                        Ext.getCmp('notPlatform').show();
                                    }
                                }
                            }
                        }, {
                            boxLabel: 'No',
                            name: 'member.allowNotifications',
                            inputValue: 'NO',
                            listeners: {
                                check: function(checkbox, checked) {
                                    if (checked) {
                                        Ext.getCmp('notPlatform').disable();
                                        Ext.getCmp('notPlatform').hide();
                                    }
                                }
                            }
                        }]
                    }, {
                        xtype: 'radiogroup',
                        fieldLabel: 'Notification Platform',
                        hidden: true,
                        enabled: false,
                        id: 'notPlatform',
                        columns: 3,
                        items: [{
                            boxLabel: 'Email',
                            name: 'member.notificationPlatform',
                            inputValue: 'EMAIL'
                        }, {
                            boxLabel: 'SMS',
                            name: 'member.notificationPlatform',
                            inputValue: 'SMS'
                        }, {
                            boxLabel: 'Both',
                            name: 'member.notificationPlatform',
                            inputValue: 'BOTH',
                            checked: true
                        }]
                    }]
                }, {
                    xtype: 'fieldset',
                    title: 'Social Media Information',
                    autoHeight: true,
                    collapsed: false,
                    items: [{
                        columnWidth: .5,
                        layout: 'form',
                        labelWidth: 50,
                        items: [{
                            xtype: 'textfield',
                            fieldLabel: 'Facebook',
                            name: 'member.facebook',
                            maxLength: 50,
                            anchor: '100%'
                        }, {
                            xtype: 'textfield',
                            fieldLabel: 'Twitter',
                            name: 'member.memberBio.twitter',
                            maxLength: 50,
                            anchor: '100%'
                        }]
                    }, {
                        columnWidth: .5,
                        layout: 'form',
                        labelWidth: 50,
                        items: [{
                            xtype: 'textfield',
                            fieldLabel: 'LinkedIn',
                            name: 'member.memberBio.linkedIn',
                            maxLength: 50,
                            anchor: '100%'
                        }, {
                            xtype: 'textfield',
                            fieldLabel: 'Google+',
                            name: 'member.memberBio.googleplus',
                            maxLength: 50,
                            anchor: '100%'
                        }]
                    }]
                }, {
                    xtype: 'fieldset',
                    title: 'Exit Information',
                    autoHeight: true,
                    collapsed: false,
                    items: [{
                        xtype: 'datefield',
                        fieldLabel: 'Date of Exit',
                        name: 'member.exitDate',
                        readOnly: true,
                        anchor: '100%'
                    }, {
                        xtype: 'textfield',
                        fieldLabel: 'Reason For Exit',
                        maxLength: 50,
                        name: 'member.reasonForExit',
                        readOnly: true,
                        anchor: '100%'
                    }, {
                        xtype: 'textfield',
                        hidden: true,
                        labelSeparator: '',
                        name: 'member.benId',
                        id: 'benId',
                        anchor: '100%'
                    }]
                },
                {
                    xtype: 'fieldset',
                    title: 'Image Information',
                    autoHeight: true,
                    collapsed: false,
                    items: [{
                        xtype: 'panel',
                        id: 'photoPanel',
                        height: 100,
                    }]
                }
            ],
        }
    ]
});