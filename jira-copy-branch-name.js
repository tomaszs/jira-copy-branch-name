function markTicketName() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get('selectedIssue');
    
    let branchId = document.querySelector('#branchId');

    if (!branchId) {
        branchId = document.createElement('div');
        branchId.id = 'branchId';
        branchId.style.position = 'absolute';
        branchId.style.left = '250px';
        branchId.style.top = '23px';
        branchId.style.display = 'block';

        const branchName = `feature/${product}`;

        const button = document.createElement('input');
        button.type = 'button';
        button.value = 'Copy branch name';
        button.style.backgroundColor = '#0052CC';
        button.style.color = '#EEE';
        button.style.borderWidth = '0';
        button.style.fontSize = '14px';
        button.style.padding = '8px';
        button.style.paddingLeft = '12px';
        button.style.paddingRight = '12px';
        button.style.borderRadius = '4px';
        button.style.fontWeight = '600';
        button.style.cursor = 'pointer';
        button.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';

        button.addEventListener('click', function() {
            navigator.clipboard.writeText(branchName);
        });

        branchId.appendChild(button);

        const header = document.querySelector('#jira-issue-header');
        header.appendChild(branchId);
    }
}

setInterval(markTicketName, 2000);