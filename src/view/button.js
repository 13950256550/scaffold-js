import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'antd'

import {SiForm} from '../common/core/components/SiForm'

const fields = [
    {label: '角色编号', fieldId: 'id', required: true},
    {label: '角色代码', fieldId: 'roleCode', required: true, code: 'BAD305'},
    {label: '经办日期', fieldId: 'date', dateFormat: 'YYYYMMDD'},
    {label: '数值输入', fieldId: 'number', number: true, reg: /^[0-9]*$/},
];

ReactDOM.render(<SiForm
    fields={fields}
/>, document.getElementById('app'))