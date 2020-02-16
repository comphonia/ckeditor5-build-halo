 /* demo */
window.mediamanagerConfig = function(fnEditorInsert) {
    window.mediamanager(
      "mediamanager",
      { fnUpload: onUpload, fnDownload: onDownload },fnEditorInsert
    );

    const file = {
      url:
        "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=134&q=90",
      src:
        "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=134&q=90",
      name: "file",
      type: "jpg"
    };

    let files = [];

    for (let i = 0; i < 20; i++) {
      files.push({...file, name: file.name+`-${i}`});
    }

    /**
     * POST the file/files to the server. return a promise that resolves to null (or a url if you plan on extending it).
     *
     * @param {*} files
     * @returns {Promise<null>}
     */
    async function onUpload(files) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(files);
          resolve(null);
        }, 1000);
      });
    }
    /**
     * GET file/files to the server. return a promise that resolves to an array of JSON
     *
     * @returns {Promise<Object[]>}
     */
    async function onDownload() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(files);
        }, 1000);
      });
    }
    /**
     * callback that's called once files are selected and inserted / editor is closed
     * generate markup for a content editor using the returned file(s)
     *
     * @param {*} files
     */
    function insertFile(files) {
      console.log(`<img src=${files[0].url} />`);
    }
  };