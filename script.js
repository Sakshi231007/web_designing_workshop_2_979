let transactions =
JSON.parse(localStorage.getItem("transactions")) || [];

displayData();

function addTransaction()
{
    let desc = document.getElementById("desc").value;
    let amount = parseFloat(document.getElementById("amount").value);
    let type = document.getElementById("type").value;

    if(desc==="" || isNaN(amount))
    {
        alert("Fill all fields");
        return;
    }

    let transaction =
    {
        desc:desc,
        amount:amount,
        type:type
    };

    transactions.push(transaction);

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );

    displayData();

    document.getElementById("desc").value="";
    document.getElementById("amount").value="";
}

function displayData()
{
    let history =
    document.getElementById("history");

    history.innerHTML="";

    let income=0;
    let expense=0;

    for(let i=0;i<transactions.length;i++)
    {
        let t=transactions[i];

        if(t.type==="Income")
        {
            income+=t.amount;
        }
        else
        {
            expense+=t.amount;
        }

        history.innerHTML+=`
        <tr>
            <td>${t.desc}</td>
            <td>₹${t.amount}</td>
            <td>${t.type}</td>
            <td>
            <button class="delete"
            onclick="deleteTransaction(${i})">
            Delete
            </button>
            </td>
        </tr>`;
    }

    document.getElementById("income").innerHTML=income;
    document.getElementById("expense").innerHTML=expense;
    document.getElementById("balance").innerHTML=
    income-expense;
}

function deleteTransaction(index)
{
    transactions.splice(index,1);

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );

    displayData();
}