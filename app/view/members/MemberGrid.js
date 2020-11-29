Ext.define('Xe.view.members.MemberGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'membergrid',
    reference: 'memberGrid',
    bind: '{members}',
    selModel: {
        injectCheckbox: 'first',
        checkOnly: true,
        model: 'SIMPLE',
        type: 'checkboxmodel',

    },
    plugins: {
        gridfilters: true
    },
    columns: [{
            id: 'id',
            text: "ID",
            width: 30,
            hidden: true,
            dataIndex: 'id',
        },
        {
            text: 'Member Number',
            dataIndex: 'memberNo',
            width: 40,
            sortable: true,
            filter: {
                type: 'string',
                itemDefaults: {
                    emptyText: 'Search for...'
                }
            }
        },
        {
            text: 'Account Number',
            dataIndex: 'policyNo',
            hidden: true,
            sortable: true,
            flex: 1,

        },
        {
            text: 'Party Ref. Number',
            dataIndex: 'partyRefNo',
            flex: 1,
            hidden: true,
        },
        {
            text: 'Partner No.',
            dataIndex: 'partnerNo',
            flex: 1,
            hidden: true,
            sortable: true
        },
        {
            text: 'Name',
            dataIndex: 'fullName',
            flex: 1,
            sortable: true,
        },
        {
            text: 'Gender',
            dataIndex: 'gender',
            width: 70,

            sortable: true
        },
        {
            text: 'Date Joined Scheme',
            dataIndex: 'dateJoinedScheme',
            flex: 1,
            sortable: true
        },
        {
            text: 'Date Of Birth',
            dataIndex: 'dob',
            flex: 1,
            sortable: true
        },
        {
            text: 'Age',
            dataIndex: 'age',
            width: 50,
            sortable: true
        },
        {
            text: 'Age',
            dataIndex: 'ageDecimals',
            flex: 1,
            sortable: true,
            hidden: true
        },
        {
            text: 'Member Class',
            dataIndex: 'memberClassName',
            flex: 1,
            width: 80,
            sortable: true,
        },
        {
            text: 'ID Number',
            dataIndex: 'idNo',
            flex: 1,
            sortable: true,
        },
        {
            text: 'Email',
            dataIndex: 'email',
            flex: 1,
            sortable: true
        },
        {
            text: 'Phone',
            dataIndex: 'primaryPhone',
            flex: 1,
            width: 60,
            sortable: true
        },
        {
            text: 'Tax PIN',
            dataIndex: 'taxPin',
            flex: 1,
            width: 50,
            hidden: false,
            sortable: true
        },
        {
            text: 'Social Security Number',
            dataIndex: 'nationalPenNo',
            flex: 1,
            hidden: true
        },
        {
            text: 'schemeId',
            dataIndex: 'schemeId',
            flex: 1,
            hidden: true
        },
        {
            text: 'classId',
            dataIndex: 'classId',
            flex: 1,
            hidden: true
        },
        {
            text: 'memberBioId',
            dataIndex: 'memberBioId',
            flex: 1,
            hidden: true
        },
        {
            text: 'Job Grade',
            dataIndex: 'jobGrade',
            flex: 1,
            hidden: true
        },
        {
            text: 'Biometrics Status',
            dataIndex: 'biometricReged',
            flex: 1,
            hidden: true
        },
        {
            text: 'Status',
            dataIndex: 'membershipStatus',
            flex: 1,
            sortable: true,
        },
        {
            text: 'Lifestyle profile',
            dataIndex: 'lifestyleProfile',
            width: 65,
            sortable: true,
            flex: 1,
        }
    ],

});