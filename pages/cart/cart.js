// cart.js
Page({
  data: {
    checkboxItems: [
      { name: 'standard is dealt for u.', value: '0', checked: true },
      { name: 'standard is dealicient for u.', value: '1', checked: false }
    ],
    checkAll: false
  },
  checkboxChange: function (e) {

    // 子项影响全选
    let allItems = this.data.checkboxItems.length;
    if (e.detail.value.length == allItems) {
      this.setData({
        checkAll: true
      });
    } else {
      this.setData({
        checkAll: false
      });
    }

    // 处理选择一项
    var checkboxItems = this.data.checkboxItems, values = e.detail.value;
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;
      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }
    this.setData({
      checkboxItems: checkboxItems
    });
  },
  checkAll(e) { // 处理全选按钮
    let checkboxItems = this.data.checkboxItems
    if (e.detail.value == 'checkAll') {
      for (let i in checkboxItems) {
        checkboxItems[i].checked = true;
        this.setData({
          checkboxItems: checkboxItems
        });
      }
    } else {
      for (let i in checkboxItems) {
        checkboxItems[i].checked = false;
        this.setData({
          checkboxItems: checkboxItems
        });
      }
    }
  }
})