##@ Help
help:                ## Shows this help.
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

##@ Build clinica-dental
install:  ##Installs dependencies
	npm install
run: ##Run the app
	npm run dev
build: ##Build the app
	npm run build

##@ Docker
build-gitlab:
	docker build -t registry.gitlab.com/anggieprojects/clinica-dental .
push-gitlab:
	docker push registry.gitlab.com/anggieprojects/clinica-dental