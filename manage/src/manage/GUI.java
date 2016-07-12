package manage;

import java.awt.Dimension;

import javafx.application.Platform;
import javafx.embed.swing.JFXPanel;
import javafx.scene.Scene;
import javafx.scene.web.WebView;

import javax.swing.JFrame;

public class GUI {
	private JFrame frame;
	
	public GUI()
	{
		frame = new JFrame("manage");
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setSize(840, 640);
		frame.setMinimumSize(new Dimension(840, 640));
		frame.setVisible(true);
		
		JFXPanel jfxPanel = new JFXPanel(); // Scrollable JComponent
		
		Platform.runLater( () -> {
			WebView webView = new WebView();
//			String url = this.getClass().getResource("files/index.html").toExternalForm();
//			System.out.println(url);
			webView.getEngine().load("file:///Users/DariusSzablowski/git/manage/manage/files/index.html");
	  		jfxPanel.setScene(new Scene(webView));
		});
		
		frame.add(jfxPanel);
	}

}
