package it.unical.mat.webcomp21.model;

import java.util.List;

public class Utente {
	
	private String email;
	
	private String password;
	
	private String username;
	
	private String nome;
	
	private String cognome;
	
	private List<GiochiPosseduti> giochiPosseduti;
	
	private List<GiochiDesiderati> giochiDesiderati;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUser() {
		return username;
	}

	public void setUser(String username) {
		this.username = username;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCognome() {
		return cognome;
	}

	public void setCognome(String cognome) {
		this.cognome = cognome;
	}

	public List<GiochiPosseduti> getGiochiPosseduti() {
		return giochiPosseduti;
	}

	public void setGiochiPosseduti(List<GiochiPosseduti> giochiPosseduti) {
		this.giochiPosseduti = giochiPosseduti;
	}

	public List<GiochiDesiderati> getGiochiDesiderati() {
		return giochiDesiderati;
	}

	public void setGiochiDesiderati(List<GiochiDesiderati> giochiDesiderati) {
		this.giochiDesiderati = giochiDesiderati;
	}

}
