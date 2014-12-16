require('tesselate') ({
  modules: {
    A: ['ir-attx4', 'ir'],
    C: ['relay-mono', 'relay']
  }
}, function (tessel, modules) {
  modules.ir.on('data', function () {
    modules.relay.toggle(1);
  });
});
