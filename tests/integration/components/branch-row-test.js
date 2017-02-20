import EmberObject from '@ember/object';
import { test, moduleForComponent } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('branch-row', 'Integration | Component | branch row', {
  integration: true
});

test('it renders data correctly', function (assert) {
  const branch = EmberObject.create({
    name: 'master',
    repository: {
      id: 15038,
      name: 'php-test-staging',
      slug: 'travis-repos/php-test-staging'
    },
    defaultBranch: true,
    existsOnGithub: true,
    lastBuild: {
      id: 393177,
      number: '1',
      state: 'passed',
      duration: 22,
      event_type: 'push',
      previous_state: null,
      started_at: '2015-03-10T23:19:31Z',
      finished_at: '2015-03-10T23:19:45Z',
      commit: {
        id: 160181,
        sha: 'a82f6ba76c7b729375ed6a1d7a26b765f694df12',
        ref: 'refs/heads/master',
        message: 'Add money example as hello world',
        compareUrl: 'https://github.com/travis-repos/php-test-staging/compare/3d86ee98be2b...a82f6ba76c7b',
        committedAt: '2014-11-20T18:34:04Z',
        committerName: 'Dan Buch'
      }
    }
  });

  this.set('branch', branch);

  this.render(hbs`{{branch-row branch=branch}}`);

  assert.ok(this.$().find('.branch-row').hasClass('passed'), 'component should have state class (passed)');
  assert.equal(this.$('.row-name .label-align').text().trim(), 'master', 'should display correct branch name');
  assert.equal(this.$('.row-request .label-align').text().trim(), '1 passed', 'should display build number and state');
  assert.equal(this.$('.row-commiter .label-align').text().trim(), 'Dan Buch', 'should display correct commiter name');
  assert.equal(this.$('.row-commit .inner-underline').text().trim(), 'a82f6ba', 'should display correct commit sha');
});
