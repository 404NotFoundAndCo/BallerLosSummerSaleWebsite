# BallerLosSummerSaleWebsite

# Repository-Struktur
## Branches
- main - live branch, nur develop darf in diesen gemerged werden
- develop - developing branch auf den alle feautures gemerged werden
- BaseStructure - main page, navigation
- responsive - alles für responsive Webdesign
- accessibility - alles für Barrierefreiheit
- contactForm - alles für das Kontaktformular
- product - alles für die Produktpage
- company - alles für die Firmapage
- hosting - zum testen vom Hosten der Website# wizards-web-craft-page

## Deployment
Start docker from src directory with `docker compose up`.

Make sure to set the following variables in the `.env` file in the projects root directory:

NGINX_HOST: The hostname the server will listen on
NGINX_PORT: The port to use for nginx INSIDE the container. Can be any port and you can leave it as it is, but it's need to be set.
EXTERNAL_PORT: The port number to be externally exposed. Make sure it matches the forwarding of your reverse proxy.

### Deployment - Remarks
This application is intended to be run behind a reverse proxy that terminates the actual ssl connection. For the further communication between the rpx and the bundled webserver a snakeoil cert is applied, so make sure the app is only reachable via your proxy and isn't exposed to the web directly.
