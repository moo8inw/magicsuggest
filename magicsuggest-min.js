!function(e){"use strict";var t=function(t,n){var i=this,a={allowFreeEntries:!0,cls:"",data:null,dataUrlParams:{},disabled:!1,displayField:"name",editable:!0,expanded:!1,expandOnFocus:!1,groupBy:null,hideTrigger:!1,highlight:!0,id:null,infoMsgCls:"",inputCfg:{},invalidCls:"ms-inv",matchCase:!1,maxDropHeight:290,maxEntryLength:null,maxEntryRenderer:function(e){return"Please reduce your entry by "+e+" character"+(e>1?"s":"")},maxSuggestions:null,maxSelection:10,maxSelectionRenderer:function(e){return"You cannot choose more than "+e+" item"+(e>1?"s":"")},method:"POST",minChars:0,minCharsRenderer:function(e){return"Please type "+e+" more character"+(e>1?"s":"")},mode:"local",name:null,noSuggestionText:"No suggestions",placeholder:"Type or click here",autoSelect:!0,renderer:null,required:!1,resultAsString:!1,resultsField:"results",selectionCls:"",selectionPosition:"inner",selectionRenderer:null,selectionStacked:!1,sortDir:"asc",sortOrder:null,strictSuggest:!1,style:"",toggleOnClick:!1,typeDelay:400,useTabKey:!1,useCommaKey:!0,useZebraStyle:!1,value:null,valueField:"id",vregex:null,vtype:null},o=e.extend({},n),s=e.extend(!0,{},a,o);this.addToSelection=function(t,n){if(!s.maxSelection||l.length<s.maxSelection){e.isArray(t)||(t=[t]);var a=!1;e.each(t,function(t,n){-1===e.inArray(n[s.valueField],i.getValue())&&(l.push(n),a=!0)}),a===!0&&(h._renderSelection(),this.empty(),n!==!0&&e(this).trigger("selectionchange",[this,this.getSelection()]))}this.input.attr("placeholder","inner"===s.selectionPosition&&this.getValue().length>0?"":s.placeholder)},this.clear=function(e){this.removeFromSelection(l.slice(0),e)},this.collapse=function(){s.expanded===!0&&(this.combobox.detach(),s.expanded=!1,e(this).trigger("collapse",[this]))},this.disable=function(){this.container.addClass("ms-ctn-disabled"),s.disabled=!0,i.input.attr("disabled",!0)},this.empty=function(){this.input.val("")},this.enable=function(){this.container.removeClass("ms-ctn-disabled"),s.disabled=!1,i.input.attr("disabled",!1)},this.expand=function(){!s.expanded&&(this.input.val().length>=s.minChars||this.combobox.children().size()>0)&&(this.combobox.appendTo(this.container),h._processSuggestions(),s.expanded=!0,e(this).trigger("expand",[this]))},this.isDisabled=function(){return s.disabled},this.isValid=function(){var t=s.required===!1||l.length>0;return(s.vtype||s.vregex)&&e.each(l,function(e,n){t=t&&h._validateSingleItem(n[s.displayField])}),t},this.getDataUrlParams=function(){return s.dataUrlParams},this.getName=function(){return s.name},this.getSelection=function(){return l},this.getRawValue=function(){return i.input.val()},this.getValue=function(){return e.map(l,function(e){return e[s.valueField]})},this.removeFromSelection=function(t,n){e.isArray(t)||(t=[t]);var a=!1;e.each(t,function(t,n){var o=e.inArray(n[s.valueField],i.getValue());o>-1&&(l.splice(o,1),a=!0)}),a===!0&&(h._renderSelection(),n!==!0&&e(this).trigger("selectionchange",[this,this.getSelection()]),s.expandOnFocus&&i.expand(),s.expanded&&h._processSuggestions()),this.input.attr("placeholder","inner"===s.selectionPosition&&this.getValue().length>0?"":s.placeholder)},this.getData=function(){return g},this.setData=function(e){s.data=e,h._processSuggestions()},this.setName=function(t){s.name=t,t&&(s.name+=t.indexOf("[]")>0?"":"[]"),i._valueContainer&&e.each(i._valueContainer.children(),function(e,t){t.name=s.name})},this.setSelection=function(e){this.clear(),this.addToSelection(e)},this.setValue=function(t){var n=[];e.each(t,function(t,i){var a=!1;if(e.each(g,function(e,t){return t[s.valueField]==i?(n.push(t),a=!0,!1):void 0}),!a)if("object"==typeof i)n.push(i);else{var o={};o[s.valueField]=i,o[s.displayField]=i,n.push(o)}}),n.length>0&&this.addToSelection(n)},this.setDataUrlParams=function(t){s.dataUrlParams=e.extend({},t)};var r,l=[],c=0,u=!1,d=null,g=[],p=!1,m={BACKSPACE:8,TAB:9,ENTER:13,CTRL:17,ESC:27,SPACE:32,UPARROW:38,DOWNARROW:40,COMMA:188},h={_displaySuggestions:function(t){i.combobox.show(),i.combobox.empty();var n=0,a=0;if(null===d)h._renderComboItems(t),n=c*t.length;else{for(var o in d)a+=1,e("<div/>",{"class":"ms-res-group",html:o}).appendTo(i.combobox),h._renderComboItems(d[o].items,!0);var r=i.combobox.find(".ms-res-group").outerHeight();if(null!==r){var l=a*r;n=c*t.length+l}else n=c*(t.length+a)}n<i.combobox.height()||n<=s.maxDropHeight?i.combobox.height(n):n>=i.combobox.height()&&n>s.maxDropHeight&&i.combobox.height(s.maxDropHeight),1===t.length&&s.autoSelect===!0&&i.combobox.children().filter(":last").addClass("ms-res-item-active"),0===t.length&&""!==i.getRawValue()&&(h._updateHelper(s.noSuggestionText),i.collapse()),0===t.length&&i.combobox.hide()},_getEntriesFromStringArray:function(t){var n=[];return e.each(t,function(t,i){var a={};a[s.displayField]=a[s.valueField]=e.trim(i),n.push(a)}),n},_highlightSuggestion:function(e){var t=i.input.val();return 0===t.length?e:e=s.matchCase===!0?e.replace(new RegExp("("+t+")(?!([^<]+)?>)","g"),"<em>$1</em>"):e.replace(new RegExp("("+t+")(?!([^<]+)?>)","gi"),"<em>$1</em>")},_moveSelectedRow:function(e){s.expanded||i.expand();var t,n,a,o;t=i.combobox.find(".ms-res-item"),n="down"===e?t.eq(0):t.filter(":last"),a=i.combobox.find(".ms-res-item-active:first"),a.length>0&&("down"===e?(n=a.nextAll(".ms-res-item").first(),0===n.length&&(n=t.eq(0)),o=i.combobox.scrollTop(),i.combobox.scrollTop(0),n[0].offsetTop+n.outerHeight()>i.combobox.height()&&i.combobox.scrollTop(o+c)):(n=a.prevAll(".ms-res-item").first(),0===n.length&&(n=t.filter(":last"),i.combobox.scrollTop(c*t.length)),n[0].offsetTop<i.combobox.scrollTop()&&i.combobox.scrollTop(i.combobox.scrollTop()-c))),t.removeClass("ms-res-item-active"),n.addClass("ms-res-item-active")},_processSuggestions:function(t){var n=null,a=t||s.data;if(null!==a){if("function"==typeof a&&(a=a.call(i,i.getRawValue())),"string"==typeof a){e(i).trigger("beforeload",[i]);var o=e.extend({query:i.input.val()},s.dataUrlParams);return e.ajax({type:s.method,url:a,data:o,success:function(t){n="string"==typeof t?JSON.parse(t):t,h._processSuggestions(n),e(i).trigger("load",[i,n]),h._asyncValues&&(i.setValue("string"==typeof h._asyncValues?JSON.parse(h._asyncValues):h._asyncValues),h._renderSelection(),delete h._asyncValues)},error:function(){throw"Could not reach server"}}),void 0}g=a.length>0&&"string"==typeof a[0]?h._getEntriesFromStringArray(a):a[s.resultsField]||a;var r="remote"===s.mode?g:h._sortAndTrim(g);h._displaySuggestions(h._group(r))}},_render:function(t){switch(i.setName(s.name),i.container=e("<div/>",{"class":"ms-ctn form-control "+(s.resultAsString?"ms-as-string ":"")+s.cls+(s.disabled===!0?" ms-ctn-disabled":"")+(s.editable===!0?"":" ms-ctn-readonly")+(s.hideTrigger===!1?"":" ms-no-trigger"),style:s.style,id:s.id}),i.container.focus(e.proxy(f._onFocus,this)),i.container.blur(e.proxy(f._onBlur,this)),i.container.keydown(e.proxy(f._onKeyDown,this)),i.container.keyup(e.proxy(f._onKeyUp,this)),i.input=e("<input/>",e.extend({type:"text","class":s.editable===!0?"":" ms-input-readonly",readonly:!s.editable,placeholder:s.placeholder,disabled:s.disabled},s.inputCfg)),i.input.focus(e.proxy(f._onInputFocus,this)),i.input.click(e.proxy(f._onInputClick,this)),i.combobox=e("<div/>",{"class":"ms-res-ctn dropdown-menu"}).height(s.maxDropHeight),i.combobox.on("click","div.ms-res-item",e.proxy(f._onComboItemSelected,this)),i.combobox.on("mouseover","div.ms-res-item",e.proxy(f._onComboItemMouseOver,this)),i.selectionContainer=e("<div/>",{"class":"ms-sel-ctn"}),i.selectionContainer.click(e.proxy(f._onFocus,this)),"inner"===s.selectionPosition?i.selectionContainer.append(i.input):i.container.append(i.input),i.helper=e("<span/>",{"class":"ms-helper "+s.infoMsgCls}),h._updateHelper(),i.container.append(i.helper),e(t).replaceWith(i.container),s.selectionPosition){case"bottom":i.selectionContainer.insertAfter(i.container),s.selectionStacked===!0&&(i.selectionContainer.width(i.container.width()),i.selectionContainer.addClass("ms-stacked"));break;case"right":i.selectionContainer.insertAfter(i.container),i.container.css("float","left");break;default:i.container.append(i.selectionContainer)}s.hideTrigger===!1&&(i.trigger=e("<div/>",{"class":"ms-trigger",html:'<div class="ms-trigger-ico"></div>'}),i.trigger.click(e.proxy(f._onTriggerClick,this)),i.container.append(i.trigger)),null!==s.value&&("string"==typeof s.data?(h._asyncValues=s.value,h._processSuggestions()):(h._processSuggestions(),i.setValue(s.value),h._renderSelection())),e("body").click(function(e){i.container.hasClass("ms-ctn-focus")&&0===i.container.has(e.target).length&&e.target.className.indexOf("ms-res-item")<0&&e.target.className.indexOf("ms-close-btn")<0&&i.container[0]!==e.target&&f._onBlur()}),s.expanded===!0&&(s.expanded=!1,i.expand())},_renderComboItems:function(t,n){var a=this,o="";e.each(t,function(t,i){var r=null!==s.renderer?s.renderer.call(a,i):i[s.displayField],l=e("<div/>",{"class":"ms-res-item "+(n?"ms-res-item-grouped ":"")+(t%2===1&&s.useZebraStyle===!0?"ms-res-odd":""),html:s.highlight===!0?h._highlightSuggestion(r):r,"data-json":JSON.stringify(i)});l.click(e.proxy(f._onComboItemSelected,a)),l.mouseover(e.proxy(f._onComboItemMouseOver,a)),o+=e("<div/>").append(l).html()}),i.combobox.append(o),c=i.combobox.find(".ms-res-item:first").outerHeight()},_renderSelection:function(){var t=this,n=0,a=0,o=[],r=s.resultAsString===!0&&!u;i.selectionContainer.find(".ms-sel-item").remove(),void 0!==i._valueContainer&&i._valueContainer.remove(),e.each(l,function(n,i){var a,c,u=null!==s.selectionRenderer?s.selectionRenderer.call(t,i):i[s.displayField],d=h._validateSingleItem(i[s.displayField])?"":" ms-sel-invalid";r===!0?a=e("<div/>",{"class":"ms-sel-item ms-sel-text "+s.selectionCls+d,html:u+(n===l.length-1?"":",")}).data("json",i):(a=e("<div/>",{"class":"ms-sel-item "+s.selectionCls+d,html:u}).data("json",i),s.disabled===!1&&(c=e("<span/>",{"class":"ms-close-btn"}).data("json",i).appendTo(a),c.click(e.proxy(f._onTagTriggerClick,t)))),o.push(a)}),i.selectionContainer.prepend(o),i._valueContainer=e("<div/>",{style:"display: none;"}),e.each(i.getValue(),function(t,n){var a=e("<input/>",{type:"hidden",name:s.name,value:n});a.appendTo(i._valueContainer)}),i._valueContainer.appendTo(i.selectionContainer),"inner"===s.selectionPosition&&(i.input.width(0),a=i.input.offset().left-i.selectionContainer.offset().left,n=i.container.width()-a-42,i.input.width(n)),l.length===s.maxSelection?h._updateHelper(s.maxSelectionRenderer.call(this,l.length)):i.helper.hide()},_selectItem:function(e){1===s.maxSelection&&(l=[]),i.addToSelection(e.data("json")),e.removeClass("ms-res-item-active"),(s.expandOnFocus===!1||l.length===s.maxSelection)&&i.collapse(),u?u&&(s.expandOnFocus||p)&&(h._processSuggestions(),p&&i.expand()):i.input.focus()},_sortAndTrim:function(t){var n=i.getRawValue(),a=[],o=[],r=i.getValue();return n.length>0?e.each(t,function(e,t){var i=t[s.displayField];(s.matchCase===!0&&i.indexOf(n)>-1||s.matchCase===!1&&i.toLowerCase().indexOf(n.toLowerCase())>-1)&&(s.strictSuggest===!1||0===i.toLowerCase().indexOf(n.toLowerCase()))&&a.push(t)}):a=t,e.each(a,function(t,n){-1===e.inArray(n[s.valueField],r)&&o.push(n)}),null!==s.sortOrder&&o.sort(function(e,t){return e[s.sortOrder]<t[s.sortOrder]?"asc"===s.sortDir?-1:1:e[s.sortOrder]>t[s.sortOrder]?"asc"===s.sortDir?1:-1:0}),s.maxSuggestions&&s.maxSuggestions>0&&(o=o.slice(0,s.maxSuggestions)),o},_group:function(t){return null!==s.groupBy&&(d={},e.each(t,function(e,t){var n=s.groupBy.indexOf(".")>-1?s.groupBy.split("."):s.groupBy,i=t[s.groupBy];if("string"!=typeof n)for(i=t;n.length>0;)i=i[n.shift()];void 0===d[i]?d[i]={title:i,items:[t]}:d[i].items.push(t)})),t},_updateHelper:function(e){i.helper.html(e),i.helper.is(":visible")||i.helper.fadeIn()},_validateSingleItem:function(e){if(null!==s.vregex&&s.vregex instanceof RegExp)return s.vregex.test(e);if(null!==s.vtype)switch(s.vtype){case"alpha":return/^[a-zA-Z_]+$/.test(e);case"alphanum":return/^[a-zA-Z0-9_]+$/.test(e);case"email":return/^(\w+)([\-+.][\w]+)*@(\w[\-\w]*\.){1,5}([A-Za-z]){2,6}$/.test(e);case"url":return/(((^https?)|(^ftp)):\/\/([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*\/?)/i.test(e);case"ipaddress":return/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(e)}return!0}},f={_onBlur:function(){if(i.container.removeClass("ms-ctn-focus"),i.collapse(),u=!1,""!==i.getRawValue()&&s.allowFreeEntries===!0){var t={};t[s.displayField]=t[s.valueField]=i.getRawValue().trim(),i.addToSelection(t)}h._renderSelection(),i.isValid()===!1?i.container.addClass(s.invalidCls):""!==i.input.val()&&s.allowFreeEntries===!1&&(i.empty(),h._updateHelper("")),e(i).trigger("blur",[i])},_onComboItemMouseOver:function(t){i.combobox.children().removeClass("ms-res-item-active"),e(t.currentTarget).addClass("ms-res-item-active")},_onComboItemSelected:function(t){h._selectItem(e(t.currentTarget))},_onFocus:function(){i.input.focus()},_onInputClick:function(){i.isDisabled()===!1&&u&&s.toggleOnClick===!0&&(s.expanded?i.collapse():i.expand())},_onInputFocus:function(){if(i.isDisabled()===!1&&!u){u=!0,i.container.addClass("ms-ctn-focus"),i.container.removeClass(s.invalidCls);var t=i.getRawValue().length;s.expandOnFocus===!0&&i.expand(),l.length===s.maxSelection?h._updateHelper(s.maxSelectionRenderer.call(this,l.length)):t<s.minChars&&h._updateHelper(s.minCharsRenderer.call(this,s.minChars-t)),h._renderSelection(),e(i).trigger("focus",[i])}},_onKeyDown:function(t){var n=i.combobox.find(".ms-res-item-active:first"),a=i.input.val();if(e(i).trigger("keydown",[i,t]),t.keyCode===m.TAB&&(s.useTabKey===!1||s.useTabKey===!0&&0===n.length&&0===i.input.val().length))return f._onBlur(),void 0;switch(t.keyCode){case m.BACKSPACE:0===a.length&&i.getSelection().length>0&&"inner"===s.selectionPosition&&(l.pop(),h._renderSelection(),e(i).trigger("selectionchange",[i,i.getSelection()]),i.input.attr("placeholder","inner"===s.selectionPosition&&this.getValue().length>0?"":s.placeholder),i.input.focus(),t.preventDefault());break;case m.TAB:case m.ESC:case m.ENTER:t.preventDefault();break;case m.CTRL:p=!0;break;case m.DOWNARROW:t.preventDefault(),h._moveSelectedRow("down");break;case m.UPARROW:t.preventDefault(),h._moveSelectedRow("up");break;default:l.length===s.maxSelection&&t.preventDefault()}},_onKeyUp:function(t){var n,a=i.getRawValue(),o=e.trim(i.input.val()).length>0&&(!s.maxEntryLength||e.trim(i.input.val()).length<=s.maxEntryLength),c={};if(e(i).trigger("keyup",[i,t]),clearTimeout(r),t.keyCode===m.ESC&&s.expanded&&i.combobox.hide(),t.keyCode===m.TAB&&s.useTabKey===!1||t.keyCode>m.ENTER&&t.keyCode<m.SPACE)return t.keyCode===m.CTRL&&(p=!1),void 0;switch(t.keyCode){case m.UPARROW:case m.DOWNARROW:t.preventDefault();break;case m.ENTER:case m.TAB:case m.COMMA:if(t.keyCode!==m.COMMA||s.useCommaKey===!0){if(t.preventDefault(),s.expanded===!0&&(n=i.combobox.find(".ms-res-item-active:first"),n.length>0))return h._selectItem(n),void 0;o===!0&&s.allowFreeEntries===!0&&(c[s.displayField]=c[s.valueField]=a.trim(),i.addToSelection(c),i.collapse(),i.input.focus());break}default:l.length===s.maxSelection?h._updateHelper(s.maxSelectionRenderer.call(this,l.length)):a.length<s.minChars?(h._updateHelper(s.minCharsRenderer.call(this,s.minChars-a.length)),s.expanded===!0&&i.collapse()):s.maxEntryLength&&a.length>s.maxEntryLength?(h._updateHelper(s.maxEntryRenderer.call(this,a.length-s.maxEntryLength)),s.expanded===!0&&i.collapse()):(i.helper.hide(),s.minChars<=a.length&&(r=setTimeout(function(){s.expanded===!0?h._processSuggestions():i.expand()},s.typeDelay)))}},_onTagTriggerClick:function(t){i.removeFromSelection(e(t.currentTarget).data("json"))},_onTriggerClick:function(){if(i.isDisabled()===!1&&(s.expandOnFocus!==!0||l.length!==s.maxSelection))if(e(i).trigger("triggerclick",[i]),s.expanded===!0)i.collapse();else{var t=i.getRawValue().length;t>=s.minChars?(i.input.focus(),i.expand()):h._updateHelper(s.minCharsRenderer.call(this,s.minChars-t))}}};null!==t&&h._render(t)};e.fn.magicSuggest=function(n){var i=e(this);return 1===i.size()&&i.data("magicSuggest")?i.data("magicSuggest"):(i.each(function(){var i=e(this);if(!i.data("magicSuggest")){"select"===this.nodeName.toLowerCase()&&(n.data=[],n.value=[],e.each(this.children,function(t,i){i.nodeName&&"option"===i.nodeName.toLowerCase()&&(n.data.push({id:i.value,name:i.text}),e(i).attr("selected")&&n.value.push(i.value))}));var a={};e.each(this.attributes,function(e,t){a[t.name]="value"===t.name&&""!==t.value?JSON.parse(t.value):t.value});var o=new t(this,e.extend([],e.fn.magicSuggest.defaults,n,a));i.data("magicSuggest",o),o.container.data("magicSuggest",o)}}),1===i.size()?i.data("magicSuggest"):i)},e.fn.magicSuggest.defaults={}}(jQuery);