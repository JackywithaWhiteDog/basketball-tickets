import React from 'react'

const UrlField = ({ record = {}, source }) =>
    <a href={'http://www.' + record[source]} rel="noreferrer" target="_blank">
        {record[source]}
    </a>;

export default UrlField;
