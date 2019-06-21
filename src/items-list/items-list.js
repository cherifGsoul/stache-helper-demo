import { Component, stache } from 'can';
import './items-list.less';
import view from './items-list.stache';

stache.addHelper('isArray', function(val, options) {
  if (val && Array.isArray(val)) {
    return options.fn(this);
  } else {
    return options.inverse(true);
  }
});

Component.extend({
	tag: "an-item",
	view: `
	{{console.log(scope.vm)}}
	{{# isArray(scope.vm.items[foo]) }}
		{{ ../foo }}
	{{ else }}
		not array: {{ ../foo }}
	{{/ isArray }}
	`,
	ViewModel: {
		foo: {
			default: "Foo"
		},
		items: {
			default: () => ['baz']
		}
	}
});

export const ItemsList = Component.extend({
  tag: 'items-list',
  view
});

export default ItemsList;
export const ViewModel = ItemsList.ViewModel;
