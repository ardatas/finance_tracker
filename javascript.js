const descriptions = [];
const amounts = [];
const types = [];
let htmlRows=``; 


function storeExpense() {
    // prevent reloading page after submit 
    event.preventDefault();

    const description = document.getElementById('description').value; 
    const amount = Number(document.getElementById('amount').value);
    const type = document.getElementById('type').value; 

    descriptions.push(description);
    amounts.push(amount);
    types.push(type);

    displayExpense();
}


// const buttonClicked = document.querySelector('button[type="submit"]');
// buttonClicked.addEventListener('click', () => displayExpense('afterend'));

document.getElementById('form').addEventListener('submit', storeExpense);

const body = document.getElementById('tableBody');

function displayExpense(position) {
        let i = (descriptions.length)-1;

        htmlRows += `<tr>
                <td>${descriptions[i]}</td>
                <td>${amounts[i]}$</td>
                <td>${types[i]}</td>
            </tr>`;

        document.getElementById('table-body').innerHTML = htmlRows; 
    }
