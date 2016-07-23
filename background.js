   //alert(document.location);
/*chrome.runtime.onMessage.addListener(function(response,sender,sendResponse){
	alert(response);
});*/

var contextsList=["selection","image","link","page"];
for(i=0;i<contextsList.length;i++)
{
	var context=contextsList[i];
	var titleX="Twitter Toolkit: Share this "+context+" on your twitter profile";
	chrome.contextMenus.create({
		title:titleX,
		contexts:[context],//appear menu item when user selected some 
									//item in browser otherwise dont appear
		onclick:clickHandler,
		id:context
	});//grab all information set in the loop
}


/*function clickHandler(data,tab)
{
	//alert(selectedText.selectionText);//alert the text user has selected
	switch(data.menuItemId)
	{
		case 'selection':
		chrome.tabs.create({url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(data.selectionText)});
		break;
		case 'link':
		chrome.tabs.create({url:"https://twitter.com/intent/tweet?url="+encodeURIComponent(data.linkUrl)});
		break;
		case 'image':
		chrome.tabs.create({url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(data.srcUrl)});
		break;
		case 'page':
		chrome.tabs.create({url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(tab.title)});
		break;
	}	
}*/

function clickHandler(data,tab)
{
	//alert(selectedText.selectionText);//alert the text user has selected
	switch(data.menuItemId)
	{
		case 'selection':
		chrome.windows.create({url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(data.selectionText),type:"panel"});
		break;
		case 'link':
		chrome.windows.create({url:"https://twitter.com/intent/tweet?url="+encodeURIComponent(data.linkUrl),type:"panel"});
		break;
		case 'image':
		chrome.windows.create({url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(data.srcUrl),type:"panel"});
		break;
		case 'page':
		chrome.windows.create({url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(tab.title)+"&url="+(data.pageUrl),type:"panel"});
		break;
	}	
}