module.exports = {

      "packagerConfig": {},
      "makers": [
        {
          "name": "@electron-forge/maker-squirrel"
        },
        {
          "name": "@electron-forge/maker-zip",
          "platforms": [
            "darwin"
          ]
        },
        {
          "name": "@electron-forge/maker-deb",
          "config": {}
        },
        {
          "name": "@electron-forge/maker-rpm",
          "config": {}
        }
      ],
      "publishers": [
        {
          "name": "@electron-forge/publisher-github",
          "config": {
            "repository": {
              "owner": "saxxas88",
              "name": "electron-forge-updater"
            },
            "authToken": process.env.GITHUB_TOKEN,
            "prerelease": false
          }
        }
      ]
  
  };