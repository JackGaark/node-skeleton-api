import { app } from "./app";
import { configurations } from "./shared/configurations";

app.listen(configurations.port, () =>
  console.log(`listening on port ${configurations.port}`)
);
