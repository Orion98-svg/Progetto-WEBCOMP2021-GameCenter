package it.unical.mat.webcomp21.model;

public class GiochiPosseduti {
	
	private int idGioco;
	
	private boolean giocato;
	
	private boolean completato;

	public int getIdGioco() {
		return idGioco;
	}

	public void setIdGioco(int idGioco) {
		this.idGioco = idGioco;
	}

	public boolean isGiocato() {
		return giocato;
	}

	public void setGiocato(boolean giocato) {
		this.giocato = giocato;
	}

	public boolean isCompletato() {
		return completato;
	}

	public void setCompletato(boolean completato) {
		this.completato = completato;
	}

}
