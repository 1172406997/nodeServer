function route (handle,pathname){
    console.log("About to Router a Request for" +pathname );
    if(typeof handle[pathname] === 'function'){
        handle[pathname]();
    }else{
        console.log("No request handler found for " + pathname)
    }
}

exports.route = route;