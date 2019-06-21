import QUnit from 'steal-qunit';
import { ViewModel } from './items-list';

// ViewModel unit tests
QUnit.module('~/items-list');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the items-list component');
});
