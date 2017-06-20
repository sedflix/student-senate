/**
 * Created by Sid on 20-06-2017.
 */
function loadDoc(name, two) {
    var xhttp = new XMLHttpRequest();
    stringX = "";
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            links[two] = this.response;
        }
        else {
        }
    };
    xhttp.open("GET", name.toString(), true);
    return xhttp.send();
}

var links = {
    "Who are we?": loadDoc('whoarewe.html', "Who are we?"),
    "Our Duties": loadDoc('duties.html', "Our Duties"),
    "Election Guidelines": loadDoc('elections.html', "Election Guidelines"),
    "People": '<iframe class="airtable-embed" src="https://airtable.com/embed/shrMyyQNmP56RskGQ?backgroundColor=teal&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="100%" style="background: transparent; border: 1px solid #ccc;"></iframe>',
    "Meeting Minutes": '<iframe class="airtable-embed" src="https://airtable.com/embed/shrE5IG7ocLxPgtDI?backgroundColor=teal&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="100%" style="background: transparent; border: 1px solid #ccc;"></iframe>',
    "Issues And Tasks": '<iframe class="airtable-embed" src="https://airtable.com/embed/shrRCgr6l3hRSdDbI?backgroundColor=teal&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="100%" style="background: transparent; border: 1px solid #ccc;"></iframe>',
    "Solutions": '<iframe class="airtable-embed" src="https://airtable.com/embed/shr284TOjF7i5WfJx?backgroundColor=teal&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>',
    "Report Issue/Complain": '<iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shrgxYZBI9QEj3WRj?backgroundColor=teal" frameborder="0" onmousewheel="" width="100%" height="100%" style="background: transparent; border: 1px solid #ccc;"></iframe>',
    "Submit Solution": '<iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shrOXBdRSgSMU6U6D?backgroundColor=teal" frameborder="0" onmousewheel="" width="100%" height="100%" style="background: transparent; border: 1px solid #ccc;"></iframe>',
    "Software Projects": 'Under development',
    "Events": 'Under development',
    "Join us on Slack": loadDoc('slack.html', "Join us on Slack"),
    "Mail Us": 'Under development',
    "Quick Link": '<iframe class="airtable-embed" src="https://airtable.com/embed/shrTXxDCIufvPbitu?backgroundColor=teal&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="100%" style="background: transparent; border: 1px solid #ccc;"></iframe>',
    "Submit a Quick Link": '<iframe class="airtable-embed" src="https://airtable.com/embed/shrTIAgqYnSCDpDFd?backgroundColor=teal" frameborder="0" onmousewheel="" width="100%" height="100%" style="background: transparent; border: 1px solid #ccc;"></iframe>',
    "View All": '<iframe class="airtable-embed" src="https://airtable.com/embed/shrCcWmgG9WheZ1eQ?backgroundColor=teal" frameborder="0" onmousewheel="" width="100%" height="100%" style="background: transparent; border: 1px solid #ccc;"></iframe>',
    "View Resources": '<iframe class="airtable-embed" src="https://airtable.com/embed/shrQc4NUFtSS4aqon?backgroundColor=teal&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="100%" style="background: transparent; border: 1px solid #ccc;"></iframe>',
    "Submit a Resource": '<iframe class="airtable-embed" src="https://airtable.com/embed/shreFa0s2hanuO6Z9?backgroundColor=teal" frameborder="0" onmousewheel="" width="100%" height="100%" style="background: transparent; border: 1px solid #ccc;"></iframe>'
};