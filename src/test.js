import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'donejs-pg/models/test';

import '~/items-list/items-list-test';

F.attach(QUnit);

QUnit.module('donejs-pg functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('donejs-pg main page shows up', function() {
  F('title').text('donejs-pg', 'Title is set');
});
