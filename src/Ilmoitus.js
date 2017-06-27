import React from "react";
import { Alert } from "react-bootstrap";

async function remove(id, rev) {
  await fetch("/ilmoitustaulu/" + id + "?rev=" + rev, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE"
  });
}

const Ilmoitus = ({ _id, _rev, teksti }) =>
  <Alert key={_id} bsStyle={teksti.tyyppi} onDismiss={() => remove(_id, _rev)}>
    {teksti.teksti}
  </Alert>;

/*
<Button bsSize="small" onClick={() => remove(_id)}>
  <Glyphicon glyph="remove" />
</Button>
*/
export default Ilmoitus;
