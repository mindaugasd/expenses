package lt.itakademija.expenses;

import java.util.List;

import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ExpenseService {

	@Autowired
	private ExpenseRepository repository;

	public List<Expense> getExpenses() {
		return repository.getExpenses();

	}

	@Transactional
	public Expense addExpense(Expense expense) {
		return repository.addExpense(expense);
	}

	@Transactional
	public void deleteExpense(Long id) {
		repository.deleteExpense(id);
	}

	public double getTotalSum() {
		List<Expense> expenses = repository.getExpenses();
		double sum = 0.0;
		for (Expense exp : expenses) {
			sum += exp.getPrice();
		}
		return sum;
	}

}
