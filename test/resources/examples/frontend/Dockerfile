FROM debian:12-slim as build
# TODO:Install any dependencies required for building the application here
# RUN apt-get update && apt-get install -y build-essential

WORKDIR /application

# Copy the source code to the container
COPY . .
# TODO: Add commands for building the application here
# RUN make build / go build / mvn package / npm run build / etc

FROM gcr.io/distroless/static-debian12
# Copy the files from your build stage to the distroless image
# We do this to keep the end image as small as possible
COPY --from=build /application /application
# TODO: Add any environment variables required for the application here
# ENV MY_ENV_VAR="my-value"

# TODO: Add any ports that the application listens on here
# EXPOSE 8080

# TODO: Add any volumes that the application uses here
# VOLUME /var/log/application

# TODO: Add any health checks that the application requires here
# HEALTHCHECK --interval=5s --timeout=3s --retries=3 CMD [ "curl", "-f", "http://localhost:8080/health" ]

# TODO: Add any labels that the application requires here
# LABEL com.example.version="0.0.1-beta"

# TODO: Add any user that the application requires here
# USER myuser

# TODO: Add any entrypoint that the application requires here
# ENTRYPOINT ["/application/run-something.sh"]

# TODO: Add any command that the application requires here
CMD ["run-something.sh", "arg1", "arg2"]