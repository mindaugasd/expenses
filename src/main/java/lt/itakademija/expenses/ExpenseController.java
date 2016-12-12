package lt.itakademija.expenses;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ExpenseController {

	@Autowired
	private ExpenseService service;

	@GetMapping("/api")
	public List<Expense> getExpenses() {
		return service.getExpenses();
	}

	@PostMapping("/api")
	public Expense addExpense(@RequestBody Expense expense) {
		return service.addExpense(expense);
	}

	@DeleteMapping("/api/{id}")
	public void deleteExpense(@PathVariable Long id) {
		service.deleteExpense(id);
	}

	@GetMapping("/sum")
	public double getTotalSum() {
		return service.getTotalSum();
	}

}
