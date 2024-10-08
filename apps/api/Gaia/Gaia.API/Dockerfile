#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER app
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["Gaia.API/Gaia.API.csproj", "Gaia.API/"]
COPY ["Gaia.Application/Gaia.Application.csproj", "Gaia.Application/"]
COPY ["Gaia.Domain/Gaia.Domain.csproj", "Gaia.Domain/"]
COPY ["Gaia.Infrastructure/Gaia.Infrastructure.csproj", "Gaia.Infrastructure/"]
RUN dotnet restore "./Gaia.API/Gaia.API.csproj"
COPY . .
WORKDIR "/src/Gaia.API"
RUN dotnet build "./Gaia.API.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./Gaia.API.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Gaia.API.dll"]