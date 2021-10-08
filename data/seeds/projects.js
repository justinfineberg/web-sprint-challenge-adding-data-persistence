
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'rowValue1', project_description: 'good project', project_completed: false},
        {project_name: 'rowValue2', project_description: 'good project', project_completed: false},
        {project_name: 'rowValue3', project_description: 'good project', project_completed: false}
      ]);
    });
};
