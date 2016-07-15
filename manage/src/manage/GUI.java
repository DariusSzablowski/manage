package manage;

import com.apple.eawt.Application;
import com.apple.eawt.FullScreenUtilities;

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
		frame.setLocationRelativeTo(null);
		frame.setVisible(true);
		
		FullScreenUtilities.setWindowCanFullScreen(frame,true);
		
		JFXPanel jfxPanel = new JFXPanel();
		
		String urlToGUI = GUI.class.getProtectionDomain().getCodeSource().getLocation().getPath();
		String url = "file://" + urlToGUI.substring(0, urlToGUI.length() - 4) + "files/index.html";
		
		Platform.runLater( () -> {
			WebView webView = new WebView();
			webView.getEngine().load(url);
	  		jfxPanel.setScene(new Scene(webView));
		});
		
		frame.add(jfxPanel);
	}

}
