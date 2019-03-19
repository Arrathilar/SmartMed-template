// window.onload = function() {
//     document.querySelector(".cont_modal").className = "cont_modal";
//   };
//   var c = 0;
//   function open_close() {
//     if (c % 2 == 0) {
//       document.querySelector(".cont_modal").className =
//         "cont_modal cont_modal_active";
//       c++;
//     } else {
//       document.querySelector(".cont_modal").className = "cont_modal";
//       c++;
//     }
//   }

// "use strict";
// webix.ui({
// rows:[
//   { view:"template",
//     type:"header", template:"My App!" },
//   { view:"datatable",
//     autoConfig:true,
//     data:{
//       title:"My Fair Lady", year:1964, votes:533848, rating:8.9, rank:5
//     }
//   }
// ]
// });
"use strict";
var filter = {
  view: "accordion",
  container: "header",
  height: 500,
  rows: [
    {
      view: "accordionitem",
      header: "Pane 1",
      headerHeight: 50,
      body: {
        view: "form",
        elements: [
          {
            rows: [
              { template: "Alpha fields", type: "section" },
              { view: "text", label: "Alpha 1", value: "" },
              { view: "text", label: "Alpha 2", value: "" }
            ]
          },
          {
            rows: [
              { template: "Beta fields", type: "section" },
              { view: "text", label: "Beta 1", value: "" }
            ]
          }
        ]
      }
    },
    {
      view: "accordionitem",
      header: "Pane 2",
      body: "Pane body 2",
      collapsed: true
    },
    {
      view: "accordionitem",
      header: "Pane 3",
      body: "Pane body 3",
      collapsed: true
    },
    {
      view: "accordionitem",
      header: "Pane 4",
      body: "Pane body 4",
      collapsed: true
    }
  ]
};

("use strict");
var menu_data = [
  { id: "main", icon: "mdi mdi-view-dashboard", value: "Головна" },
  {
    id: "category",
    icon: "mdi mdi-view-column",
    value: "Категорія 1",
    data: [
      { id: "category_1", value: "Підкатегорія 1" },
      { id: "category_2", value: "Підкатегорія 2" }
    ]
  },
  {
    id: "categorys",
    icon: "mdi mdi-table",
    value: "Категорія 2",
    data: [
      { id: "tables1", value: "Підкатегорія 1" },
      { id: "tables2", value: "Підкатегорія 2" },
      { id: "tables3", value: "Підкатегорія 3" }
    ]
  },
  {
    id: "uis",
    icon: "mdi mdi-puzzle",
    value: "Категорія 3",
    data: [
      { id: "dataview", value: "DataView" },
      { id: "list", value: "List" },
      { id: "menu", value: "Menu" },
      { id: "tree", value: "Tree" }
    ]
  },
  {
    id: "tools",
    icon: "mdi mdi-calendar",
    value: "Категорія 4",
    data: [
      { id: "kanban", value: "lorem" },
      { id: "pivot", value: "lorem" },
      { id: "scheduler", value: "lorem" }
    ]
  },
  {
    id: "forms",
    icon: "mdi mdi-pencil",
    value: "Контакти",
    data: [
      { id: "buttons", value: "Buttons" },
      { id: "selects", value: "Select boxes" },
      { id: "inputs", value: "Inputs" }
    ]
  }
];

webix.ui({
  rows: [
    {
      view: "toolbar",
      css: "webix_dark",
      padding: 3,
      elements: [
        {
          view: "button",
          type: "icon",
          icon: "mdi mdi-menu",
          width: 37,
          align: "left",
          css: "app_button",
          click: function() {
            $$("$sidebar1").toggle();
          }
        },
        {
          view: "label",
          label:
            "<img src='../assets/img/logo.png' style='height:30px'> SmartMed"
        },
        {
          view: "search",
          placeholder: "Введіть назву товару для пошуку",
          width: 500
        },
        {
          view: "button",
          type: "icon",
          width: 45,
          css: "app_button",
          icon: "mdi mdi-cart",
          tooltip: "Кошик",
          popup: "basket",
          badge: 4
        }
        // { view: "button", type: "icon", width: 45, css: "app_button", icon: "mdi mdi-bell",  badge:10}
      ]
    },
    {
      cols: [
        {
          view: "sidebar",
          css: "webix_dark",
          data: menu_data,
          on: {
            onAfterSelect: function(id) {
              webix.message("Selected: " + this.getItem(id).value);
            }
          }
        },
        // {view:"htmlform", src:"/templates/card_view.html"}

        {
          view: "gridlayout",
          gridColumns: 4,
          gridRows: 1,
          cols: [
              {
                  view: "accordion",
                  rows: [
                      {
                          view: "accordionitem",
                          header: "Pane 1",
                          headerHeight: 50,
                          body: {
                              view: "form",
                              elements: [
                                  {view:"radio", name:"gr1x", label:"Branch", value:2, options:[
                                    { value:"Master", id:1 },
                                    { value:"Branch", id:2 },
                                  ] },
                                  {
                                      rows: [
                                          { template: "Alpha fields", type: "section" },
                                          { view: "text", label: "Alpha 1", value: "" },
                                          { view: "text", label: "Alpha 2", value: "" }
                                        ]
                                    },
                                    {
                                        rows: [
                                            { template: "Beta fields", type: "section" },
                                            { view: "text", label: "Beta 1", value: "" }
                                        ]
                                    },
                                    {
                                        rows: [
                                            { template: "1234", type: "section"},
                                            { view: "text", label: "Beta 1", value: "" },
                                        ]
                                    },
                                    { view:"button", value:"Confirm", width:200, align:"center" }
                                ]
                            }
                        },
                        {
                            view: "accordionitem",
                            header: "Pane 2",
                            body: "Pane body 2",
                            collapsed: true
                        },
                        {
                            view: "accordionitem",
                            header: "Pane 3",
                            body: "Pane body 3",
                            collapsed: true
                        },
                        {
                            view: "accordionitem",
                            header: "Pane 4",
                            body: "Pane body 4",
                            collapsed: true
                        }
                    ]
                    ,x: 0, y: 0, dx: 1, dy: 1},
                    { template: "main window", x: 1, y: 0, dx: 3, dy: 1 }
                ]
        }

        // {template:"http->/templates/card_view.html"},
      ]
    }
  ]
});
webix.ui({
  view: "popup",
  id: "basket",
  head: "basket_popup",
  width: 500,
  body: {
    view: "list",
    data: [
      { id: "1", name: "first item", cost: "100$" },
      { id: "2", name: "second item", cost: "200$" },
      { id: "3", name: "third item", cost: "300$" }
    ],
    template: "#itemName# - #cost#",
    autoheight: true,
    select: true
  }
});
