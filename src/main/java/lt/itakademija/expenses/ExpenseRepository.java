package lt.itakademija.expenses;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ExpenseRepository {

	@Autowired
	private EntityManager em;
	
	public List<Expense> getExpenses() {
		Query query = em.createQuery("select p from Expense p");
		return query.getResultList();
	}
	
	public Expense addExpense(Expense expense) {
		em.persist(expense);
		return expense;
	}
	
	public void deleteExpense(Long id) {
		Expense removableExpense = em.find(Expense.class, id);
		em.remove(removableExpense);
	}
	
	

}
