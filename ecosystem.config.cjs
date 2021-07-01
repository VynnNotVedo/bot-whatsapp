// eslint-disable-next-line no-undef
module.exports = {
  apps: [{
    name: "Bot WhatsApp",
    script: "./index.js",
    watch: "true",
    args: ["--color"],
    node_args: '--harmony',
    error_file: './logs/pm2/XXXerr.log',
    combine_logs: true,
    cron_restart: '30 */6 * * *',
    ignore_watch: [
      "data",
      "node_modules",
      "media",
      "logs"
    ]
  }]
}