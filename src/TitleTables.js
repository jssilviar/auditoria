export const titleTables = [
    {
      name: 'folio',
      selector: row => row.folio,
    },
    {
        name: 'folio',
        selector: row => row.folio,
      },
      {
        name: 'seller RUT',
        selector: row => row.rut,
      },
      {
        name: 'term',
        selector: row => row.closeout_number,
      },{
        name: 'liquidación',
        selector: row => row.term,
      },{
        name: 'SKU',
        selector: row => row.sku,
      },{
        name: 'quantity',
        selector: row => row.quantity,
      },{
        name: 'createUp',
        selector: row => row.createdAt,
      },{
        name: 'updateUp',
        selector: row => row.updatedAt,
      },{
        name: 'reception-time',
        selector: row => row.reception_time,
      },{
        name: 'fulfillment-type',
        selector: row => row.fulfillment_type,
      },{
        name: 'category',
        selector: row => row.category,
      },{
        name: 'status',
        selector: row => row.status,
      },{
        name: 'international',
        selector: row => row.international,
      },{
        name: 'origin',
        selector: row => row.origin,
      }
]

export const paginationOptions = {
  rowsPerPageText: 'Registro',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos',
}

