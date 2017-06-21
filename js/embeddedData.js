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
    "Members": '<iframe class="airtable-embed" src="https://airtable.com/embed/shrMyyQNmP56RskGQ?backgroundColor=teal&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="100%" style="background: transparent; border: 1px solid #ccc;"></iframe><div class="bottomStuff3" ><p style="margin-bottom: 3%"><a href="old/prev.html">Past Members</a></p></div>',
    "Meeting Minutes": '<iframe class="airtable-embed" src="https://airtable.com/embed/shrewxlovjLOBCKtc?backgroundColor=teal&layout=card&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="100%" style="background: transparent; border: 1px solid #ccc;"></iframe>',
    "Issues And Tasks": '<iframe class="airtable-embed" src="https://airtable.com/embed/shrF6WiI0UGmg6RZl?backgroundColor=teal&layout=card&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="100%" style="background: transparent; border: 1px solid #ccc;"></iframe>',
    "Solutions": '<iframe class="airtable-embed" src="https://airtable.com/embed/shr284TOjF7i5WfJx?backgroundColor=teal&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="100%" style="background: transparent; border: 1px solid #ccc;"></iframe>',
    "Report Issue/Request Task": '<iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shrgxYZBI9QEj3WRj?backgroundColor=teal" frameborder="0" onmousewheel="" width="100%" height="100%" style="background: transparent; border: 1px solid #ccc;"></iframe>',
    "Submit Solution": '<iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shrOXBdRSgSMU6U6D?backgroundColor=teal" frameborder="0" onmousewheel="" width="100%" height="100%" style="background: transparent; border: 1px solid #ccc;"></iframe>',
    "Software Projects": loadDoc('software.html', "Software Projects"),
    "Events": '<iframe class="airtable-embed" src="https://airtable.com/embed/shrfQRlep6f7XmUWj?backgroundColor=teal&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="100%" style="background: transparent; border: 1px solid #ccc;"></iframe>',
    "Join us on Slack": loadDoc('slack.html', "Join us on Slack"),
    "Mail Us": loadDoc('mail.html', "Mail Us"),
    "Quick Link": '<iframe class="airtable-embed" src="https://airtable.com/embed/shrTXxDCIufvPbitu?backgroundColor=teal&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="100%" style="background: transparent; border: 1px solid #ccc;"></iframe>',
    "Submit a Quick Link": '<iframe class="airtable-embed" src="https://airtable.com/embed/shrTIAgqYnSCDpDFd?backgroundColor=teal" frameborder="0" onmousewheel="" width="100%" height="100%" style="background: transparent; border: 1px solid #ccc;"></iframe>',
    "View All": '<iframe class="airtable-embed" src="https://airtable.com/embed/shrCcWmgG9WheZ1eQ?backgroundColor=teal" frameborder="0" onmousewheel="" width="100%" height="100%" style="background: transparent; border: 1px solid #ccc;"></iframe>',
    "View Resources": '<iframe class="airtable-embed" src="https://airtable.com/embed/shrQc4NUFtSS4aqon?backgroundColor=teal&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="100%" style="background: transparent; border: 1px solid #ccc;"></iframe>',
    "Submit a Resource": '<iframe class="airtable-embed" src="https://airtable.com/embed/shreFa0s2hanuO6Z9?backgroundColor=teal" frameborder="0" onmousewheel="" width="100%" height="100%" style="background: transparent; border: 1px solid #ccc;"></iframe>',
    "Explore our Database": '<iframe class="airtable-embed" src="https://airtable.com/embed/shrCcWmgG9WheZ1eQ?backgroundColor=transparent&layout=card"  frameborder="0" onmousewheel="" width="100%" height="100%" style="background: #e0e0e0; border: 1px solid #ccc;"></iframe>',
    "Latest News": '<iframe class="airtable-embed" src="https://airtable.com/embed/shrTXxDCIufvPbitu?backgroundColor=teal&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="100%" style="background: transparent; border: 1px solid #ccc;"></iframe>'
}