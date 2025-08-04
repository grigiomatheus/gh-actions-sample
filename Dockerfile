FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ./src/SampleWebApi/SampleWebApi.csproj ./
RUN dotnet restore
COPY ./src/SampleWebApi/. ./
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=build /src/out ./
EXPOSE 8080
ENTRYPOINT ["dotnet", "SampleWebApi.dll"]