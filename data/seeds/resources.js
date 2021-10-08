
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'firstRESname', resource_description: 'firstRESdescription'},
        {resource_name: 'secondRESname', resource_description: 'secondRESdescription'},
        {resource_name: 'thirdRESname', resource_description: 'thirdRESdescription'}
      ]);
    });
};
