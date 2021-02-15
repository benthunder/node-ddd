FROM gitpod/workspace-mongodb
                    
USER gitpod

mkdir -p /workspace/data && mongod --dbpath /workspace/data