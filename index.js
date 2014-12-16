require('tesselate') ({
  modules: {
    A: ['ir-attx4', 'ir'],
    C: ['relay-mono', 'relay']
  }
}, function (tessel, modules) {
  console.log('Ready to be remote controlled.');
  tessel.led[0].write(1); // Turn on green light to show readiness
  modules.ir.on('data', function () {
    modules.relay.toggle(1);
  });
});
