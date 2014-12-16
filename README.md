simple-remote-switch
====================

Uses IR signal to latch/unlatch a relay.

Plug something into the relay (like a [flashing light](https://projects.tessel.io/projects/website-down-alarm), for instance).

Plug the relay into port C.

Plug the infrared module into port A.

Upload the code, and then point any old IR remote at the IR module.

The Tessel will toggle the relay (switch on/off) any time it receives infrared data.

Ta da! You now have the simplest possible remote-controlled switch.
