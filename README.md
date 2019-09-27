# dfds-ships-on-map

```bash
brew install mkcert              # Installs mkcert
brew install nss                 # If you using Firefox
mkdir /certificates              # Makes a folder called certificates
cd /certificates                 # Browsing to the folder
mkcert -install                  # Installing the certificates
mkcert localhost 127.0.0.1 ::1   # Enables them on localhost
```