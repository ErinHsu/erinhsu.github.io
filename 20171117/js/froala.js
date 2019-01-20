function initFroala(S_imageUploadURL, S_fileUploadURL){
	$.FroalaEditor.DEFAULTS.key = 'FJCJWECHICc1JOZWJ==';
	$.P_imageUploadURL = S_imageUploadURL;
	$.P_fileUploadURL = S_fileUploadURL;

}

function bindfroalaEditor(id, mkdid){
		$('#'+id)
		.froalaEditor({
            // Set the image upload parameter.
//             imageUploadParam: 'image_param',
			  height: 450,
  			  imageInsertButtons: ['imageBack', '|'
  			                       , 'imageUpload'
  			                       , 'imageByURL'
  			                       //, 'imageManager'
  			  ],
  			  
			  quickInsertButtons: [],
			  toolbarButtons:['fullscreen', 'bold', 'italic', 'underline'
			                  , 'strikeThrough', 'subscript', 'superscript'
			                  //, 'fontFamily'
			                  , 'fontSize'
			                  , '|'
			                  , 'color' //, 'emoticons', 'inlineStyle', 'paragraphStyle'
			                  , '|'
			                  , 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent'
			                  , 'indent', 'quote', 'insertHR'
			                  , '|'
			                  , 'insertLink', 'insertImage'
			                  , 'insertVideo'
			                  , 'insertFile'
			                  , 'insertTable', 'undo', 'redo'
			                  , 'clearFormatting', 'selectAll', 'html'
			],

            toolbarSticky: false,

            // Define new table styles.
			tableStyles: {
				table_original: 'table_original'
// 				,table_froala: 'table_froala'
// 				,table_froala2: 'table_froala2'
  		    },      
  		    
  		    //NOT Allows multiple table styles to be selected at a time.
  		  	tableMultipleStyles: false,

  		  	tableColors: [  '#e3ebd2', '#d2dae9', '#367f88', '#4fab00', '#b4db72'
  		  	              , '#e8edf1', '#004ea2', '#dce6f1', '#f4f0e6'
  		  	              , '#000', '#FFF', '#f2f2f2', 'REMOVE'],

  		  	videoInsertButtons: ['videoBack', '|', 'videoByURL', 'videoEmbed'],
  		  	fileInsertButtons: ['fileBack', '|'],
            // Set the image upload URL.
            imageUploadURL: $.P_imageUploadURL,

            // Additional upload params.
            imageUploadParams: {mkdid: mkdid},

            // Set request type.
            imageUploadMethod: 'POST',

            // Set max image size to 5MB.
            imageMaxSize: 5 * 1024 * 1024,

            // Allow to upload PNG and JPG.
            imageAllowedTypes: ['jpeg', 'jpg', 'png', 'gif', 'svg+xml'],

            // Set the file upload URL.
            fileUploadURL: $.P_fileUploadURL,//for reject & file upload
            
            // Additional upload params.
            fileUploadParams: {mkdid: mkdid},
     
            // Set request type.
            fileUploadMethod: 'POST',
     
            // Set max file size to 20MB.
            fileMaxSize: 20 * 1024 * 1024,
     
            // Allow to upload any file.
            fileAllowedTypes: ['*'],

            language: 'zh_tw'
         }).on('froalaEditor.image.error', function (e, editor, error, response) {
              // Bad link.
              if (error.code == 1) { alert("連結錯誤！"); }

              // No link in upload response.
              else if (error.code == 2) { alert("未回覆連結路徑！"); }

              // Error during image upload.
              else if (error.code == 3) {  alert("上傳時發生錯誤！"); }

              // Parsing response failed.
              else if (error.code == 4) { alert("回應失敗！"); }

              // Image too text-large.
              else if (error.code == 5) {  alert("檔案過大！"); }

              // Invalid image type.
              else if (error.code == 6) { alert("不合法的圖檔型態！"); }

              // Image can be uploaded only to same domain in IE 8 and IE 9.
              else if (error.code == 7) { alert("上傳路徑不可能不用網域！"); }

              // Response contains the original server response to the request if available.
            })
            .on('froalaEditor.file.error', function (e, editor, error, response) {
            	// Bad link.
                if (error.code == 1) { alert("連結錯誤！"); }

                // No link in upload response.
                else if (error.code == 2) { alert("未回覆連結路徑！"); }

                // Error during image upload.
                else if (error.code == 3) {  alert("上傳時發生錯誤！"); }

                // Parsing response failed.
                else if (error.code == 4) { alert("回應失敗！"); }

                // Image too text-large.
                else if (error.code == 5) {  alert("檔案過大！"); }

                // Invalid image type.
                else if (error.code == 6) { alert("不合法的圖檔型態！"); }

                // Image can be uploaded only to same domain in IE 8 and IE 9.
                else if (error.code == 7) { alert("上傳路徑不可能不用網域！"); }
                
                // Response contains the original server response to the request if available.
              });
	}
	
	function bindSmallfroalaEditor(id){ //,xuid,gftm
		$('#'+id).froalaEditor({
            // Set the image upload parameter.
//             imageUploadParam: 'image_param',
			  height: 250,
  			  imageInsertButtons: ['imageBack', '|'
  			                       , 'imageUpload'
  			                       , 'imageByURL'
  			                       //, 'imageManager'
  			  ],
  			  
			  quickInsertButtons: [],
			  toolbarButtons:['fullscreen', 'bold', 'italic', 'underline'
			                  , 'strikeThrough', 'subscript', 'superscript'
			                  //, 'fontFamily'
			                  , 'fontSize'
			                  , '|'
			                  , 'color' //, 'emoticons', 'inlineStyle', 'paragraphStyle'
			                  , '|'
			                  , 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent'
			                  , 'indent', 'quote', 'insertHR'
			                  , '|'
			                  , 'insertLink', 'insertImage'
			                  , 'insertVideo', 'insertFile'
			                  , 'insertTable', 'undo', 'redo'
			                  , 'clearFormatting', 'selectAll', 'html'
			],

		    // Define new table styles.
			tableStyles: {
				table_original: 'table_original'
// 				,table_froala: 'table_froala'
// 				,table_froala2: 'table_froala2'
  		    },       
  		    
  		    //NOT Allows multiple table styles to be selected at a time.
  		  	tableMultipleStyles: false,

  		  	tableColors: [  '#e3ebd2', '#d2dae9', '#367f88', '#4fab00', '#b4db72'
  		  	              , '#e8edf1', '#004ea2', '#dce6f1', '#f4f0e6'
  		  	              , '#000', '#FFF', '#f2f2f2', 'REMOVE'],

  		  	fileInsertButtons: ['fileBack', '|'],
  		  	videoInsertButtons: ['videoBack', '|', 'videoByURL', 'videoEmbed'],
  		  		  	
            // Set the image upload URL.
  		  	imageUploadURL: $.P_imageUploadURL,
  		  	              
            // Additional upload params.
            //imageUploadParams: {xuid: xuid,gftm: gftm},

            // Set request type.
            imageUploadMethod: 'POST',

            // Set max image size to 5MB.
            //imageMaxSize: 5 * 1024 * 1024,
            imageMaxSize: 5 * 1024 * 1024,

            // Allow to upload PNG and JPG.
            imageAllowedTypes: ['jpeg', 'jpg', 'png', 'gif', 'svg+xml'],


            // Set the file upload URL.
            fileUploadURL: $.P_fileUploadURL,//for reject & file upload
            
            // Set the file upload parameter.
            fileUploadParam:'file_param',

            // Additional upload params.
            fileUploadParams: {mkdid: mkdid},
     
            // Set request type.
            fileUploadMethod: 'POST',
     
            // Set max file size to 20MB.
            fileMaxSize: 20 * 1024 * 1024,
     
            // Allow to upload any file.
            fileAllowedTypes: ['*'],

            
            language: 'zh_tw'
          })
          .on('froalaEditor.image.error', function (e, editor, error, response) {
              // Bad link.
              if (error.code == 1) { alert("連結錯誤！"); }

              // No link in upload response.
              else if (error.code == 2) { alert("未回覆連結路徑！"); }

              // Error during image upload.
              else if (error.code == 3) {  alert("上傳時發生錯誤！"); }

              // Parsing response failed.
              else if (error.code == 4) {alert("回應失敗！"); }

              // Image too text-large.
              else if (error.code == 5) {  alert("檔案過大！"); }

              // Invalid image type.
              else if (error.code == 6) { alert("不合法的圖檔型態！"); }

              // Image can be uploaded only to same domain in IE 8 and IE 9.
              else if (error.code == 7) { alert("上傳路徑不可能不用網域！"); }

              // Response contains the original server response to the request if available.
          })
          .on('froalaEditor.file.beforeUpload', function (e, editor, files) {
        	 // Return false if you want to stop the file upload.
          })
	      .on('froalaEditor.file.uploaded', function (e, editor, response) {
	        // File was uploaded to the server.
	      })
	      .on('froalaEditor.file.inserted', function (e, editor, $file, response) {
	        // File was inserted in the editor.
	      })
          .on('froalaEditor.file.error', function (e, editor, error, response) {
          	// Bad link.
              if (error.code == 1) { alert("連結錯誤！"); }

              // No link in upload response.
              else if (error.code == 2) { alert("未回覆連結路徑！"); }

              // Error during image upload.
              else if (error.code == 3) {  alert("上傳時發生錯誤！"); }

              // Parsing response failed.
              else if (error.code == 4) { alert("回應失敗！"); }

              // Image too text-large.
              else if (error.code == 5) {  alert("檔案過大！"); }

              // Invalid image type.
              else if (error.code == 6) { alert("不合法的圖檔型態！"); }

              // Image can be uploaded only to same domain in IE 8 and IE 9.
              else if (error.code == 7) { alert("上傳路徑不可能不用網域！"); }
              
              // Response contains the original server response to the request if available.
            });
	}
	
	
	function bindSimplefroalaEditor(id){
		//超大屏幕
        var toolbarButtonsXL   =['fullscreen', 'bold', 'italic', 'underline' //, 'strikeThrough'
			                  , 'subscript', 'superscript'
			                  , 'fontFamily', 'fontSize'
			                  , '|'
			                  , 'color' , //'inlineStyle', 'paragraphStyle' ,'emoticons'
			                  , '|'
			                  , 'align', 'formatOL', 'formatUL', 'outdent' //, 'paragraphFormat'
			                  , 'indent' // , 'quote', 'insertHR'
			                  , '|'
			                  , 'insertLink', //'insertImage', 'insertVideo', 'insertFile', 'insertTable'
			                  , 'undo', 'redo'
			                  , 'clearFormatting', 'selectAll', 'html'];
        //大屏幕
        var toolbarButtonsMD = ['fullscreen', 'bold', 'italic', 'underline', 'fontFamily', 'fontSize', 'color'
                                //, 'paragraphStyle', 'paragraphFormat'
                                , 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'insertHR', 'insertLink'
                                //, 'insertImage', 'insertVideo', 'insertFile'
                                , 'insertTable', 'undo', 'redo', 'clearFormatting'];
        //小屏幕
        var toolbarButtonsSM = ['fullscreen', 'bold', 'italic', 'underline', 'fontFamily', 'fontSize', 'insertLink'
                                //, 'insertImage'
                                , 'insertTable', 'undo', 'redo'];
        //手机
        var toolbarButtonsXS = ['bold', 'italic', 'fontFamily', 'fontSize', 'undo', 'redo'];
        
		$('#'+id).froalaEditor({
            // Set the image upload parameter.
//             imageUploadParam: 'image_param',
			  height: 200,
			  quickInsertButtons: [],
			  toolbarButtons:toolbarButtonsXL,
			  toolbarButtonsMD:toolbarButtonsMD,
	          toolbarButtonsSM:toolbarButtonsSM,
	          toolbarButtonsXS:toolbarButtonsXS,
			  // Define new table styles.
			  tableStyles: {
				  table_original: 'table_original'
// 				  ,table_froala: 'table_froala'
// 				  ,table_froala2: 'table_froala2'
  		      },     
  		      
    		  tableColors: [  '#e3ebd2', '#d2dae9', '#367f88', '#4fab00', '#b4db72'
    	  		  	        , '#e8edf1', '#004ea2', '#dce6f1', '#f4f0e6'
    	  		  	        , '#000', '#FFF', '#f2f2f2', 'REMOVE'],	  		    
	  		  //NOT Allows multiple table styles to be selected at a time.
	  		  tableMultipleStyles: false,
	  		  
	  		  linkList: [
	  		         {
	  		           text: 'NasFile',
	  		           href: 'www.mlmpc.com.tw/mpcfile/',
	  		           target: '_blank',
	  		         },
	  		       ],
	  		  linkText: true,

	  		  language: 'zh_tw'
          });
		
	}