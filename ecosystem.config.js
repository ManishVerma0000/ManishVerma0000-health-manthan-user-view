// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "my-app",
      script: "npm",
      args: "start",
      instances: 1,
      autorestart: true,
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
